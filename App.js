
import React, { useState, useEffect } from 'react';

const mockData = {
    applicationCopy: `Hi, I'm an AI Automation Specialist and I see you're looking for an expert to streamline your receipt and invoice extraction process. This is exactly what I do all the time, and I'm confident I'm the right fit for this project.

In fact, I've already created a detailed proposal and a workflow diagram to show you how I'd build your system. You can view the full proposal here:
$$$

About Me:
I'm an AI automation freelancer that builds out robust systems (CRMs, project management, no-code integrations). Some notable projects include:
- Built an end-to-end project management system for a $1M/year creative agency.
- Developed an automated content generation system that grew an SEO agency from $10k to $92k MRR.
- Created a monday.com CRM for a recruiting company doing $1M/year.

Further Details on My Approach:
1.  **Discovery & Scoping:** We'll begin with a detailed session to map out every step of your current process. I want to understand the nuances, the edge cases, and the exact pain points you're experiencing. This ensures the automated solution is a perfect fit.
2.  **System Architecture:** Based on our discovery, I will design the full automation architecture. This includes choosing the right tools (like Make.com, Zapier, or custom scripts), setting up the necessary integrations (Gmail, Google Drive, your accounting software), and defining the data flow.
3.  **Development & Implementation:** I will build the automation, providing you with regular updates. This is an iterative process, and I welcome feedback at every stage to ensure the final product meets your expectations.
4.  **Testing & QA:** Before going live, the system will be rigorously tested with various invoice and receipt formats to ensure accuracy and reliability. We'll handle different file types, layouts, and potential OCR errors.
5.  **Deployment & Training:** Once approved, I will deploy the system into your live environment. I will also provide a walkthrough or a short video tutorial for you and your team on how it works and how to monitor it.
6.  **Ongoing Support:** I offer ongoing support retainers to ensure the system continues to run smoothly and can be adapted to any future changes in your business processes.

I'm happy to discuss this further. Just respond to this proposal, and we can connect.

Thank you!`,
    proposalTitle: "Gmail to Google Drive: Receipt & Invoice Automation",
    proposalLink: "https://docs.google.com/document/d/example12345/edit",
    mermaidCode: `graph TD
    A[Start: Email with Invoice/Receipt Arrives] --> B{Filter Emails by Sender/Subject};
    B --> C[Extract PDF/Image Attachment];
    C --> D[Use OCR to Read Attachment Data];
    D --> E{Extracted Data};
    E --> F[Customer Name];
    E --> G[Invoice Number];
    E --> H[Total Amount];
    E --> I[Date];
    I --> J[Rename File: YYYY-MM-DD_Customer_Invoice.pdf];
    J --> K[Save Renamed File to Google Drive];
    K --> L[Log Entry in Google Sheet];
    L --> M[End: Notify via Slack/Email];`
};

const Placeholder = () => (
    <div id="output-placeholder" className="flex-1 flex items-center justify-center flex-col text-center text-gray-500">
        <i className="ph ph-files text-6xl text-gray-400 mb-4"></i>
        <h3 className="text-lg font-semibold text-gray-700">Your generated assets will appear here.</h3>
        <p className="text-sm">Paste a job description and click generate.</p>
    </div>
);

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'application-copy', name: 'Application Copy' },
        { id: 'proposal-doc', name: 'Proposal Doc' },
        { id: 'workflow-diagram', name: 'Workflow Diagram' }
    ];

    return (
        <div className="bg-gray-100 p-1 rounded-xl flex items-center space-x-1 mb-4">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-1 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === tab.id ? 'bg-white text-gray-900 shadow' : 'text-gray-500 hover:text-gray-700'}`}
                    data-tab={tab.id}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
};

const ApplicationCopy = ({ content, link }) => {
    const handleCopy = () => {
        const textToCopy = content.replace('$$$', link);
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div id="application-copy" className="tab-content h-full flex flex-col">
            <div className="bg-gray-50 rounded-lg border border-gray-200 flex-1 grid grid-rows-[auto_1fr] overflow-hidden">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h4 className="font-semibold text-gray-700 text-sm">Generated Application Copy</h4>
                    <button onClick={handleCopy} className="copy-btn bg-white text-gray-500 hover:bg-gray-100 hover:text-indigo-500 p-1.5 rounded-md transition border border-gray-200" title="Copy Text">
                        <i className="ph ph-clipboard-text text-lg"></i>
                    </button>
                </div>
                <div className="p-4 overflow-y-auto">
                    <pre className="text-sm whitespace-pre-wrap leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: content.replace('$$$', `<a href="${link}" target="_blank" class="text-indigo-500 font-semibold hover:underline">${link}</a>`) }}></pre>
                </div>
            </div>
        </div>
    );
};

const ProposalDoc = ({ title, link }) => {
    const handleCopyLink = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <div id="proposal-doc" className="tab-content h-full">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center h-full">
                <i className="ph ph-file-doc text-5xl text-indigo-500 mb-3"></i>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-sm">A professional proposal document has been created and is ready to be shared.</p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a href={link} target="_blank" rel="noreferrer" className="flex-1 text-center bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition flex items-center justify-center gap-2">
                        <i className="ph ph-arrow-square-out"></i>
                        <span>Open Google Doc</span>
                    </a>
                    <button onClick={handleCopyLink} className="copy-btn flex-1 sm:flex-initial bg-white border border-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2" title="Copy Link">
                        <i className="ph ph-link"></i>
                        <span>Copy Link</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const WorkflowDiagram = ({ code }) => {
    useEffect(() => {
        const mermaid = window.mermaid;
        if (mermaid) {
            mermaid.initialize({ startOnLoad: false, theme: 'base', themeVariables: {
                primaryColor: '#F9FAFB',
                primaryTextColor: '#111827',
                primaryBorderColor: '#6366F1',
                lineColor: '#4B5563',
                textColor: '#374151',
                fontSize: '14px',
            }});
            const mermaidContainer = document.getElementById('mermaid-diagram-container');
            if (mermaidContainer) {
                mermaidContainer.innerHTML = code;
                mermaid.run({ nodes: [mermaidContainer] });
            }
        }
    }, [code]);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div id="workflow-diagram" className="tab-content h-full flex flex-col">
            <div className="bg-gray-50 rounded-lg border border-gray-200 flex-1 grid grid-rows-[auto_1fr] overflow-hidden">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h4 className="font-semibold text-gray-700 text-sm">Generated Workflow Diagram</h4>
                    <button onClick={handleCopyCode} className="copy-btn bg-white text-gray-500 hover:bg-gray-100 hover:text-indigo-500 p-1.5 rounded-md transition border border-gray-200" title="Copy Mermaid Code">
                        <i className="ph ph-code"></i>
                    </button>
                </div>
                <div className="p-4 overflow-y-auto">
                    <div id="mermaid-diagram-container" className="mermaid bg-white p-4 rounded-md"></div>
                    <details className="mt-4 text-sm">
                        <summary className="cursor-pointer font-medium text-gray-600 hover:text-indigo-500">View Raw Mermaid Code</summary>
                        <pre className="mt-2 p-3 bg-gray-100 rounded-md text-xs whitespace-pre-wrap overflow-x-auto">{code}</pre>
                    </details>
                </div>
            </div>
        </div>
    );
};

const InputPanel = ({ jobDescription, setJobDescription, handleGenerate, isLoading }) => (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Upwork Job Description</h2>
        <textarea
            id="job-description"
            className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y"
            placeholder="Paste the full Upwork job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
        <button
            id="generate-btn"
            className="mt-4 w-full bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 flex items-center justify-center gap-2"
            onClick={handleGenerate}
            disabled={isLoading}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating...</span>
                </>
            ) : (
                <>
                    <i className="ph ph-magic-wand text-xl"></i>
                    <span>Generate Application Assets</span>
                </>
            )}
        </button>
    </div>
);

const OutputPanel = ({ isLoading, generatedData, activeTab, setActiveTab }) => (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200 flex flex-col overflow-hidden h-[32rem]">
        {generatedData ? (
            <div id="output-content" className="flex-1 flex flex-col min-h-0">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="flex-1 overflow-hidden min-h-0">
                    {activeTab === 'application-copy' && <ApplicationCopy content={generatedData.applicationCopy} link={generatedData.proposalLink} />}
                    {activeTab === 'proposal-doc' && <ProposalDoc title={generatedData.proposalTitle} link={generatedData.proposalLink} />}
                    {activeTab === 'workflow-diagram' && <WorkflowDiagram code={generatedData.mermaidCode} />}
                </div>
            </div>
        ) : (
            <Placeholder />
        )}
    </div>
);

const App = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedData, setGeneratedData] = useState(null);
    const [activeTab, setActiveTab] = useState('application-copy');

    const handleGenerate = () => {
        if (jobDescription.trim() === "") {
            return;
        }
        setIsLoading(true);
        setGeneratedData(null);
        setTimeout(() => {
            setIsLoading(false);
            setGeneratedData(mockData);
            setActiveTab('application-copy');
        }, 2500);
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Upwork AI Application Assistant</h1>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">Generate professional application assets from a job description in seconds.</p>
                </header>
                <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InputPanel
                        jobDescription={jobDescription}
                        setJobDescription={setJobDescription}
                        handleGenerate={handleGenerate}
                        isLoading={isLoading}
                    />
                    <OutputPanel
                        isLoading={isLoading}
                        generatedData={generatedData}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </main>
            </div>
        </div>
    );
};

export default App;
