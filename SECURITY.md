# Security Configuration Guide

## Overview

This application has been secured to prevent webhook credentials from being exposed in the client-side code. The security implementation includes:

1. **Serverless Function Proxy**: A Vercel serverless function (`/api/generate`) that securely proxies webhook calls
2. **Environment-based Routing**: Different behavior for local development vs production
3. **Credential Protection**: Sensitive credentials are only stored server-side

## Vercel Environment Variables Setup

To deploy this application securely on Vercel, you must set the following environment variables in your Vercel dashboard:

### Required Environment Variables

1. **WEBHOOK_URL**: `https://n8n-automations.dmdfajardo.pro/webhook/ai-application-assistant`
2. **WEBHOOK_AUTH_TOKEN**: `boat-playback-amusement-decrease-filth-renewal`

### How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Navigate to your project
3. Go to Settings → Environment Variables
4. Add the following variables:
   - **Name**: `WEBHOOK_URL`
     **Value**: `https://n8n-automations.dmdfajardo.pro/webhook/ai-application-assistant`
     **Environments**: Production, Preview

   - **Name**: `WEBHOOK_AUTH_TOKEN`
     **Value**: `boat-playback-amusement-decrease-filth-renewal`
     **Environments**: Production, Preview

5. Save the configuration
6. Redeploy your application

## Local Development

For local development:

1. The app will automatically detect it's running locally
2. It will use credentials from `.env.local` (which is gitignored)
3. Requests go directly to the webhook (bypassing the proxy)

## Production Behavior

In production:

1. All API calls go through `/api/generate` serverless function
2. The serverless function securely forwards requests to the actual webhook
3. Credentials are never exposed to the client-side code
4. Network tab will only show calls to `/api/generate`, not the actual webhook URL

## Security Benefits

- ✅ Webhook URL and authentication token are never exposed in client code
- ✅ Network requests in production only show calls to `/api/generate`
- ✅ Actual webhook endpoint is hidden from users
- ✅ Environment-based configuration allows seamless local development
- ✅ Serverless function provides rate limiting and error handling

## File Upload Security

The proxy function properly handles:
- Multipart form data for file uploads
- File size validation
- Content-type preservation
- Authentication forwarding

This ensures that PDF uploads work securely through the proxy while maintaining all functionality.