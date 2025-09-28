// Vercel serverless function to securely proxy webhook calls
export default async function handler(req, res) {
    // Enable CORS for your domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get webhook credentials from environment variables
        const webhookUrl = process.env.WEBHOOK_URL;
        const webhookToken = process.env.WEBHOOK_AUTH_TOKEN;

        if (!webhookUrl || !webhookToken) {
            console.error('Missing webhook configuration');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Handle form data properly for file uploads
        let body;
        let headers = {
            'Authorization': `Bearer ${webhookToken}`,
            'Accept': 'application/json',
        };

        // Check if it's multipart form data (file upload)
        const contentType = req.headers['content-type'];
        if (contentType && contentType.includes('multipart/form-data')) {
            // For multipart form data, we need to pass the body as-is
            // and let the browser handle the content-type with boundary
            body = req.body;
            headers['Content-Type'] = contentType;
        } else {
            // For regular JSON data
            body = req.body;
            headers['Content-Type'] = 'application/json';
        }

        // Forward the request to the actual webhook
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: headers,
            body: body,
        });

        if (!webhookResponse.ok) {
            const errorText = await webhookResponse.text();
            console.error('Webhook error:', webhookResponse.status, errorText);
            return res.status(webhookResponse.status).json({
                error: 'Webhook request failed',
                details: errorText
            });
        }

        const result = await webhookResponse.json();
        return res.status(200).json(result);

    } catch (error) {
        console.error('Proxy error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}