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
    analysis: {
        score: 88,
        level: 'EXCELLENT',
        reasons: [
            "Your extensive experience in AI automation aligns perfectly with the core requirements of the project.",
            "The mention of building end-to-end project management systems is a strong indicator of your capability for this role.",
            "Your background in CRM and no-code integrations is highly relevant to the described tasks.",
            "The proposed workflow demonstrates a clear and effective understanding of the client's needs."
        ]
    }
};

const Placeholder = () => (
    <div id="output-placeholder" className="flex-1 flex items-center justify-center flex-col text-center text-gray-500">
        <i className="ph ph-files text-6xl text-gray-400 mb-4"></i>
        <h3 className="text-lg font-semibold text-gray-700">Your generated assets will appear here.</h3>
        <p className="text-sm">Paste a job description and click generate.</p>
    </div>
);

const SkeletonLoader = ({ activeTab, setActiveTab }) => {
    return (
        <div id="skeleton-loader" className="flex-1 flex flex-col min-h-0">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 overflow-hidden min-h-0">
                {activeTab === 'application-copy' && <ApplicationCopyskeleton />}
                {activeTab === 'proposal-doc' && <ProposalDocSkeleton />}
                {activeTab === 'profile-analysis' && <ProfileAnalysisSkeleton />}
            </div>
        </div>
    );
};

const ApplicationCopyskeleton = () => (
    <div className="h-full flex flex-col">
        <div className="bg-gray-50 rounded-lg border border-gray-200 flex-1 grid grid-rows-[auto_1fr] overflow-hidden">
            <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="p-4 overflow-y-auto space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/5"></div>
            </div>
        </div>
    </div>
);

const ProposalDocSkeleton = () => (
    <div className="h-full">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center h-full">
            <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-64 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-80 mb-6"></div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <div className="flex-1 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="flex-1 sm:flex-initial h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
        </div>
    </div>
);

const ProfileAnalysisSkeleton = () => (
    <div className="h-full flex flex-col">
        <div className="bg-gray-50 rounded-lg border border-gray-200 flex-1 grid grid-rows-[auto_1fr] overflow-hidden">
            <div className="p-3 border-b border-gray-200">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            </div>
            <div className="p-4 overflow-y-auto">
                {/* Gauge skeleton */}
                <div className="flex justify-center items-center mb-4">
                    <div className="w-48 h-24 bg-gray-200 rounded-t-full animate-pulse"></div>
                </div>
                {/* Analysis text skeleton */}
                <div className="text-center mb-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-64 mx-auto"></div>
                </div>
                {/* Reasons skeleton */}
                <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-32"></div>
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse mt-0.5 shrink-0"></div>
                                <div className="flex-1 space-y-1">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                    {i % 2 === 0 && <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'application-copy', name: 'Application Copy' },
        { id: 'proposal-doc', name: 'Proposal Doc' },
        { id: 'profile-analysis', name: 'Profile Analysis' }
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
        const textToCopy = content.replace('$$', link);
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div id="application-copy" className="tab-content h-full flex flex-col">
            <div className="bg-gray-50 rounded-lg border border-gray-200 flex-1 grid grid-rows-[auto_1fr] overflow-hidden">
                <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <h4 className="font-semibold text-gray-700 text-sm">Generated Application Copy</h4>
                    <button onClick={handleCopy} className="copy-btn bg-white text-gray-500 hover:bg-gray-100 hover:text-black p-1.5 rounded-md transition border border-gray-200" title="Copy Text">
                        <i className="ph ph-clipboard-text text-lg"></i>
                    </button>
                </div>
                <div className="p-4 overflow-y-auto">
                    <pre className="text-sm whitespace-pre-wrap leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: content.replace('$$', `<a href="${link}" target="_blank" class="text-black font-semibold hover:underline">${link}</a>`) }}></pre>
                </div>
            </div>
        </div>
    );
};

const ProposalDoc = ({ title, link }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    return (
        <div id="proposal-doc" className="tab-content h-full">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center h-full">
                <i className="ph ph-file-doc text-5xl text-black mb-3"></i>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-sm">A professional proposal document has been created and is ready to be shared.</p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a href={link} target="_blank" rel="noreferrer" className="flex-1 text-center bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                        <i className="ph ph-arrow-square-out"></i>
                        <span>Open Google Doc</span>
                    </a>
                    <button
                        onClick={handleCopyLink}
                        className={`copy-btn flex-1 sm:flex-initial font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${isCopied
                                ? 'bg-green-100 border border-green-300 text-green-700'
                                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                            }`}
                        title={isCopied ? "Link Copied!" : "Copy Link"}
                    >
                        <i className={`${isCopied ? 'ph ph-check-circle' : 'ph ph-link'}`}></i>
                        <span>{isCopied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProfileAnalysis = ({ analysis }) => {
    useEffect(() => {
        if (analysis) {
            const gaugeFill = document.getElementById('gauge-fill');
            const scoreText = document.getElementById('gauge-score');
            if (gaugeFill && scoreText) {
                const totalLength = 125.6; // Circumference of the semi-circle
                const offset = totalLength - (analysis.score / 100) * totalLength;

                gaugeFill.style.strokeDashoffset = offset;
                scoreText.textContent = analysis.score;
            }
        }
    }, [analysis]);

    if (!analysis) return null;

    let levelClass = 'text-green-600'; // Default for EXCELLENT
    if (analysis.level === 'GOOD') levelClass = 'text-green-600';
    if (analysis.level === 'AVERAGE') levelClass = 'text-yellow-600';
    if (analysis.level === 'BELOW AVERAGE') levelClass = 'text-orange-600';
    if (analysis.level === 'POOR') levelClass = 'text-red-600';

    return (
        <div id="profile-analysis" className="tab-content h-full flex flex-col">
            <div className="bg-gray-50 rounded-lg border border-gray-200 flex-1 grid grid-rows-[auto_1fr] overflow-hidden">
                <div className="p-3 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-700 text-sm">Compatibility Analysis</h4>
                </div>
                <div className="p-4 overflow-y-auto">
                    {/* Gauge */}
                    <div className="flex justify-center items-center mb-4">
                        <div className="relative w-48 h-24">
                            <svg className="w-full h-full" viewBox="0 0 100 50">
                                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round"></path>
                                <path id="gauge-fill" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#000000" strokeWidth="10" strokeLinecap="round" style={{ strokeDasharray: '125.6', strokeDashoffset: '125.6', transition: 'stroke-dashoffset 0.5s ease-in-out' }}></path>
                            </svg>
                            <div className="absolute bottom-0 w-full text-center">
                                <span id="gauge-score" className="text-3xl font-bold text-gray-800">0</span>
                                <span className="text-gray-500">%</span>
                            </div>
                        </div>
                    </div>
                    {/* Analysis Text */}
                    <div className="text-center mb-6">
                        <p className="text-lg font-medium text-gray-800">
                            Overall Match: <span className={`font-bold ${levelClass}`}>{analysis.level}</span>
                        </p>
                    </div>
                    {/* Reasons */}
                    <div className="space-y-3">
                        <h5 className="font-semibold text-gray-700">Key Strengths:</h5>
                        <ul className="space-y-3">
                            {analysis.reasons.map((reason, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm">
                                    <i className="ph ph-check-circle text-green-500 text-lg mt-0.5 shrink-0"></i>
                                    <span className="text-gray-700">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InputTabs = ({ activeInputTab, setActiveInputTab }) => {
    const tabs = [
        { id: 'job-input', name: 'Job Description' },
        { id: 'info-input', name: 'My Info' }
    ];

    return (
        <div className="bg-gray-100 p-1 rounded-xl flex items-center space-x-1 mb-4">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveInputTab(tab.id)}
                    className={`flex-1 py-2 px-1 text-sm font-medium rounded-lg transition-all duration-200 ${activeInputTab === tab.id ? 'bg-white text-gray-900 shadow' : 'text-gray-500 hover:text-gray-700'}`}
                    data-tab={tab.id}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
};

const JobInputTab = ({ jobDescription, setJobDescription }) => {
    const charCount = jobDescription.length;
    const isValid = charCount >= 100;

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Online Job Description</h2>
                <span className={`text-sm font-medium ${isValid ? 'text-green-600' : charCount > 0 ? 'text-amber-600' : 'text-gray-500'}`}>
                    {charCount}/100 characters {isValid && '✓'}
                </span>
            </div>
            <textarea
                id="job-description"
                className={`w-full flex-grow p-4 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition duration-150 ${charCount > 0 && !isValid ? 'border-amber-300' : 'border-gray-300'
                    }`}
                placeholder="Paste the full online job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
        </div>
    );
};

const MyInfoTab = ({ myInfo, setMyInfo, selectedFile, setSelectedFile }) => {
    const validateFile = (file) => {
        const maxSize = 10 * 1024 * 1024; // 10MB limit

        if (!file) return { valid: false, error: "No file selected" };

        if (file.type !== 'application/pdf') {
            return { valid: false, error: "Invalid file type. Please select a PDF file." };
        }

        if (file.size > maxSize) {
            return { valid: false, error: "File size too large. Please select a PDF file under 10MB." };
        }

        return { valid: true };
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const validation = validateFile(file);

        if (validation.valid) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
            alert(validation.error);
            // Reset the input
            e.target.value = '';
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            const validation = validateFile(file);

            if (validation.valid) {
                setSelectedFile(file);
            } else {
                setSelectedFile(null);
                alert(validation.error);
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    };

    const handleDragLeave = (e) => {
        e.currentTarget.classList.remove('drag-over');
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        const fileInput = document.getElementById('file-upload');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const charCount = myInfo.length;
    const isValid = charCount >= 100 || selectedFile; // Valid if 100+ chars OR PDF uploaded
    const showCharacterCount = !selectedFile; // Only show character count when no PDF

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Your Information</h2>
                {showCharacterCount ? (
                    <span className={`text-sm font-medium ${isValid ? 'text-green-600' : charCount > 0 ? 'text-amber-600' : 'text-gray-500'}`}>
                        {charCount}/100 characters {isValid && '✓'}
                    </span>
                ) : (
                    <span className="text-sm font-medium text-green-600">
                        PDF uploaded ✓
                    </span>
                )}
            </div>
            <textarea
                id="my-info"
                className={`w-full flex-grow p-4 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition duration-150 ${selectedFile ? 'border-gray-300 opacity-75' :
                    (charCount > 0 && !isValid ? 'border-amber-300' : 'border-gray-300')
                    }`}
                placeholder={selectedFile ?
                    "Optional: Add additional text about yourself (PDF will be used as primary source)..." :
                    "Paste text about you, your skills, and experience..."
                }
                value={myInfo}
                onChange={(e) => setMyInfo(e.target.value)}
            ></textarea>
            <div
                className={`mt-4 flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg transition-colors ${selectedFile
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-300 hover:bg-gray-50 cursor-pointer'
                    }`}
                onClick={!selectedFile ? () => document.getElementById('file-upload').click() : undefined}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                    {selectedFile ? (
                        <>
                            <i className="ph ph-check-circle text-4xl text-green-500 mb-3"></i>
                            <p className="mb-2 text-sm font-medium text-green-700">
                                File uploaded successfully
                            </p>
                            <p className="text-sm text-gray-600 mb-3">{selectedFile.name}</p>
                            <p className="text-xs text-gray-500 mb-3">
                                Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        document.getElementById('file-upload').click();
                                    }}
                                    className="px-3 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                                >
                                    Replace File
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveFile();
                                    }}
                                    className="px-3 py-1.5 text-xs bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                                >
                                    Remove File
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <i className="ph ph-file-pdf text-4xl text-gray-400 mb-3"></i>
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF format only (max 10MB)</p>
                        </>
                    )}
                </div>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

const InputPanel = ({ jobDescription, setJobDescription, myInfo, setMyInfo, selectedFile, setSelectedFile, handleGenerate, isLoading, activeInputTab, setActiveInputTab }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 flex flex-col">
            <InputTabs activeInputTab={activeInputTab} setActiveInputTab={setActiveInputTab} />
            <div className="flex-1 flex flex-col min-h-0 h-[27rem]">
                {activeInputTab === 'job-input' && (
                    <JobInputTab
                        jobDescription={jobDescription}
                        setJobDescription={setJobDescription}
                    />
                )}
                {activeInputTab === 'info-input' && (
                    <MyInfoTab
                        myInfo={myInfo}
                        setMyInfo={setMyInfo}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                    />
                )}
            </div>
            <button
                id="generate-btn"
                className="mt-4 w-full bg-black text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
};

const OutputPanel = ({ isLoading, generatedData, activeTab, setActiveTab }) => (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200 flex flex-col overflow-hidden h-[32rem]">
        {isLoading ? (
            <SkeletonLoader activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : generatedData ? (
            <div id="output-content" className="flex-1 flex flex-col min-h-0">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="flex-1 overflow-hidden min-h-0">
                    {activeTab === 'application-copy' && <ApplicationCopy content={generatedData.applicationCopy} link={generatedData.proposalLink} />}
                    {activeTab === 'proposal-doc' && <ProposalDoc title={generatedData.proposalTitle} link={generatedData.proposalLink} />}
                    {activeTab === 'profile-analysis' && <ProfileAnalysis analysis={generatedData.analysis} />}
                </div>
            </div>
        ) : (
            <Placeholder />
        )}
    </div>
);

const App = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [myInfo, setMyInfo] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [generatedData, setGeneratedData] = useState(null);
    const [activeTab, setActiveTab] = useState('application-copy');
    const [activeInputTab, setActiveInputTab] = useState('job-input');

    const validateInput = () => {
        const errors = [];

        // Validate job description
        if (!jobDescription.trim()) {
            errors.push("Job description is required");
        } else if (jobDescription.trim().length < 100) {
            errors.push("Job description must be at least 100 characters");
        }

        // Validate my info - skip character limit if PDF is uploaded
        if (!selectedFile) {
            // Only validate character count if no PDF is uploaded
            if (!myInfo.trim()) {
                errors.push("Your information is required (or upload a PDF file)");
            } else if (myInfo.trim().length < 100) {
                errors.push("Your information must be at least 100 characters (or upload a PDF file)");
            }
        } else {
            // If PDF is uploaded, my info can be empty or any length
            // PDF will serve as the information source
        }

        return errors;
    };

    const handleGenerate = async () => {
        const validationErrors = validateInput();

        if (validationErrors.length > 0) {
            // Show validation errors
            const errorMessage = validationErrors.join('\n');
            alert(`Please fix the following errors:\n\n${errorMessage}`);

            // Switch to appropriate tab based on first error
            if (validationErrors[0].includes("Job description")) {
                setActiveInputTab('job-input');
                setTimeout(() => {
                    const textarea = document.getElementById('job-description');
                    if (textarea) {
                        textarea.focus();
                        textarea.classList.add('border-red-500', 'ring-red-500');
                        setTimeout(() => {
                            textarea.classList.remove('border-red-500', 'ring-red-500');
                        }, 3000);
                    }
                }, 100);
            } else if (validationErrors[0].includes("Your information")) {
                setActiveInputTab('info-input');
                setTimeout(() => {
                    const textarea = document.getElementById('my-info');
                    if (textarea) {
                        textarea.focus();
                        textarea.classList.add('border-red-500', 'ring-red-500');
                        setTimeout(() => {
                            textarea.classList.remove('border-red-500', 'ring-red-500');
                        }, 3000);
                    }
                }, 100);
            }
            return;
        }

        setIsLoading(true);
        setGeneratedData(null);

        try {
            // Prepare webhook payload
            const formData = new FormData();
            formData.append('jobDescription', jobDescription.trim());
            formData.append('myInfo', myInfo.trim());

            // Handle PDF file with proper validation and metadata
            if (selectedFile) {
                // Pre-upload validation
                if (selectedFile.size === 0) {
                    throw new Error('The PDF file appears to be empty or corrupted.');
                }

                if (selectedFile.size > 10 * 1024 * 1024) {
                    throw new Error('The PDF file is too large. Please select a file under 10MB.');
                }

                if (selectedFile.type !== 'application/pdf') {
                    throw new Error('Invalid file type. Please select a PDF file.');
                }

                console.log('PDF file details:', {
                    name: selectedFile.name,
                    size: selectedFile.size,
                    type: selectedFile.type,
                    lastModified: selectedFile.lastModified
                });

                // Append the PDF file with explicit field name and filename
                formData.append('pdfFile', selectedFile, selectedFile.name);

                // Add file metadata that the webhook might expect
                formData.append('pdfFileName', selectedFile.name);
                formData.append('pdfFileSize', selectedFile.size.toString());
                formData.append('pdfFileType', selectedFile.type);
                formData.append('hasPdfFile', 'true');
            } else {
                formData.append('hasPdfFile', 'false');
            }

            // Log the FormData entries for debugging
            console.log('FormData entries:');
            for (let pair of formData.entries()) {
                if (pair[1] instanceof File) {
                    console.log(`${pair[0]}: [File] ${pair[1].name} (${pair[1].size} bytes, ${pair[1].type})`);
                } else {
                    console.log(`${pair[0]}: ${pair[1]}`);
                }
            }

            // Send webhook request with proper headers
            const response = await fetch('https://fajardo-automations.up.railway.app/webhook/2d0cd1a8-2df2-43da-b7c6-358af4b59110', {
                method: 'POST',
                body: formData,
                // Important: Don't manually set Content-Type for FormData with files
                // Browser automatically sets: multipart/form-data; boundary=----WebKitFormBoundary...
                // Setting it manually will break the boundary parameter needed for file uploads
                headers: {
                    // Only set headers that don't interfere with multipart/form-data
                    'Accept': 'application/json',
                },
            });

            // Log the request details for debugging
            console.log('Webhook request sent to:', 'https://fajardo-automations.up.railway.app/webhook/2d0cd1a8-2df2-43da-b7c6-358af4b59110');
            console.log('Request method:', 'POST');
            console.log('Content-Type will be automatically set to: multipart/form-data; boundary=...');

            if (!response.ok) {
                // Get the error response body for better debugging
                let errorText = '';
                try {
                    errorText = await response.text();
                    console.error('Server error response:', errorText);
                } catch (e) {
                    console.error('Could not read error response:', e);
                }
                throw new Error(`HTTP error! status: ${response.status}${errorText ? `, response: ${errorText}` : ''}`);
            }

            const result = await response.json();
            console.log('Webhook response:', result);

            // Process the webhook response
            if (result && result.length > 0 && result[0].output) {
                const output = result[0].output;

                // Helper function to determine score level
                const getScoreLevel = (score) => {
                    if (score >= 86) return 'EXCELLENT';
                    if (score >= 71) return 'GOOD';
                    if (score >= 51) return 'AVERAGE';
                    if (score >= 26) return 'BELOW AVERAGE';
                    return 'POOR';
                };

                // Map webhook response to our data structure
                const processedData = {
                    applicationCopy: output.applicationCopy || '',
                    proposalTitle: 'Generated Proposal Document',
                    proposalLink: output.googleDocsLink || '',
                    analysis: output.jobProfileAnalysis ? {
                        score: output.jobProfileAnalysis.score || 0,
                        level: getScoreLevel(output.jobProfileAnalysis.score || 0),
                        reasons: output.jobProfileAnalysis.keyInformation || []
                    } : null
                };

                setGeneratedData(processedData);
            } else {
                // Fallback to mock data if response structure is unexpected
                console.warn('Unexpected response structure, using mock data');
                setGeneratedData(mockData);
            }
            setActiveTab('application-copy');

        } catch (error) {
            console.error('Error calling webhook:', error);

            // Enhanced error messaging based on error type
            let errorMessage = 'Failed to generate application assets. Please try again.';

            if (error.message.includes('413')) {
                errorMessage = 'The uploaded PDF file is too large. Please try a smaller file (under 10MB).';
            } else if (error.message.includes('415')) {
                errorMessage = 'The uploaded file format is not supported. Please ensure you upload a valid PDF file.';
            } else if (error.message.includes('400')) {
                errorMessage = 'Invalid request data. Please check your inputs and try again.';
            } else if (error.message.includes('network')) {
                errorMessage = 'Network error. Please check your internet connection and try again.';
            }

            // Log detailed error information for debugging
            if (selectedFile) {
                console.error('PDF file that failed to upload:', {
                    name: selectedFile.name,
                    size: selectedFile.size,
                    type: selectedFile.type,
                    sizeInMB: (selectedFile.size / 1024 / 1024).toFixed(2)
                });
            }

            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Online Jobs Application AI Assistant</h1>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">Generate professional application assets from a job description in seconds.</p>
                </header>
                <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InputPanel
                        jobDescription={jobDescription}
                        setJobDescription={setJobDescription}
                        myInfo={myInfo}
                        setMyInfo={setMyInfo}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        handleGenerate={handleGenerate}
                        isLoading={isLoading}
                        activeInputTab={activeInputTab}
                        setActiveInputTab={setActiveInputTab}
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