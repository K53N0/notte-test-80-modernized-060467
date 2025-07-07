'use client';

import { useState } from 'react';

const CodeSyntaxHighlight = ({ code }: { code: string }) => {
  const highlight = (line: string) => {
    line = line.replace(/^(from|import)\b/g, '<span class="text-pink-400">$1</span>');
    line = line.replace(/\b(notte_sdk|NotteClient|response|print)\b/g, '<span class="text-purple-400">$1</span>');
    line = line.replace(/\b(api_key|task|model|vault_id|session_id)\b/g, '<span class="text-sky-300">$1</span>');
    line = line.replace(/=/, '<span class="text-pink-400">=</span>');
    line = line.replace(/"(.*?)"/g, '<span class="text-emerald-300">"$1"</span>');
    line = line.replace(/\((.*?)\)/g, '(<span class="text-yellow-300">$1</span>)');
    line = line.replace(/\./g, '<span class="text-gray-400">.</span>');
    
    // The previous regex for parenthesis messes up nested coloring, let's fix the known functions
    line = line.replace(/<span class="text-purple-400">NotteClient<\/span>\((.*?)\)/g, '<span class="text-purple-400">NotteClient</span>(<span class="text-yellow-300">$1</span>)');
    line = line.replace(/<span class="text-purple-400">run<\/span>\((.*?)\)/g, '<span class="text-purple-400">run</span>(<span class="text-yellow-300">$1</span>)');
    line = line.replace(/<span class="text-purple-400">print<\/span>\((.*?)\)/g, '<span class="text-purple-400">print</span>(<span class="text-yellow-300">$1</span>)');

    return line;
  };

  return (
    <pre className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
      {code.split('\n').map((line, i) => (
        <div key={i} className="flex">
          <span className="text-gray-600 w-8 text-right pr-4 select-none">{i + 1}</span>
          <code dangerouslySetInnerHTML={{ __html: highlight(line) }} />
        </div>
      ))}
    </pre>
  );
};


export default function BuilderPage() {
  const [apiKey, setApiKey] = useState('sk-...');
  const [task, setTask] = useState('Find the latest job openings on notte.cc');
  const [vaultId, setVaultId] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [model, setModel] = useState('gpt-4o');

  const generateCode = () => {
    let params = [`    task="${task}"`];
    
    if (model) {
      params.push(`    model="${model}"`);
    }
    if (vaultId) {
      params.push(`    vault_id="${vaultId}"`);
    }
    if (sessionId) {
      params.push(`    session_id="${sessionId}"`);
    }

    const runParams = params.length > 1 ? `\n${params.join(',\n')}\n` : params[0];

    return `from notte_sdk import NotteClient

notte = NotteClient(api_key="${apiKey}")

response = notte.agents.run(${runParams})

print(response.answer)`;
  };

  const codeString = generateCode();
  
  const models = [
    { id: 'gpt-4o', name: 'GPT-4o' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
    { id: 'claude-3-opus', name: 'Claude 3 Opus' },
    { id: 'claude-3-sonnet', name: 'Claude 3 Sonnet' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans">
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Notte Agent Builder</h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Generate code to run web agents with the Notte API
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Form */}
          <div className="space-y-6 flex flex-col">
            <div>
              <label htmlFor="api-key" className="block text-sm font-medium text-gray-300 mb-2">API Key <span className="text-red-500">*</span></label>
              <input
                id="api-key"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                placeholder="Enter your API Key"
              />
            </div>

            <div>
              <label htmlFor="task" className="block text-sm font-medium text-gray-300 mb-2">Task <span className="text-red-500">*</span></label>
              <textarea
                id="task"
                rows={4}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                placeholder="e.g., Find the latest AI news on Hacker News"
              />
            </div>
            
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-2">Model</label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-md p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition appearance-none bg-no-repeat bg-right pr-8"
                style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
              >
                {models.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <details className="group border border-transparent open:border-gray-700 open:bg-gray-900/30 rounded-lg transition-all duration-300">
              <summary className="cursor-pointer p-3 font-medium list-none flex justify-between items-center text-gray-300 hover:text-white">
                Advanced Options
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-3 pt-0 space-y-4">
                <div>
                  <label htmlFor="vault-id" className="block text-sm font-medium text-gray-400 mb-2">Vault ID</label>
                  <input
                    id="vault-id"
                    type="text"
                    value={vaultId}
                    onChange={(e) => setVaultId(e.target.value)}
                    className="w-full bg-gray-800/60 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="Optional Vault ID"
                  />
                </div>
                <div>
                  <label htmlFor="session-id" className="block text-sm font-medium text-gray-400 mb-2">Session ID</label>
                  <input
                    id="session-id"
                    type="text"
                    value={sessionId}
                    onChange={(e) => setSessionId(e.target.value)}
                    className="w-full bg-gray-800/60 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="Optional Session ID"
                  />
                </div>
              </div>
            </details>
          </div>

          {/* Right Column: Code Snippet */}
          <div className="sticky top-24 self-start">
            <div className="bg-[#121212] border border-gray-800 rounded-lg overflow-hidden shadow-2xl shadow-purple-900/10">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <p className="text-sm font-medium text-white">Python SDK</p>
                <a href="https://docs.notte.cc" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition">
                  View Docs &rarr;
                </a>
              </div>
              <div className="p-4">
                <CodeSyntaxHighlight code={codeString} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}