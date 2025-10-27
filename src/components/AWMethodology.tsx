// components/AWMethodology.tsx
import { useState } from 'react';

const AWMethodology = () => {
    const [showAWTooltip, setShowAWTooltip] = useState(false);
  return (
    <div className="space-y-6">
      {/* Section 1: Project Overview */}
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <span className="text-3xl">📋</span>
          Project Overview
        </h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg leading-relaxed">
            Visual Stream is a personal productivity analytics dashboard I built to answer 
            a simple question: <span className="text-blue-400 font-semibold">where does my time 
            actually go when I'm working?</span>
          </p>
          <p className="leading-relaxed">
            What started as curiosity about my own habits evolved into a full-featured analytics 
            platform that demonstrates how I approach BA work—understanding the{' '}
            <span className="text-blue-400 font-semibold">'why'</span> behind 
            data requirements before building the{' '}
            <span className="text-blue-400 font-semibold">'what'</span>.
          </p>
        </div>
      </div>

      {/* Section 2: Problem Statement */}
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <span className="text-3xl">❓</span>
          The Problem
        </h2>
        <div className="space-y-4 text-gray-300">
          <p className="font-semibold text-blue-300">The Challenge:</p>
          <p className="leading-relaxed">
            As a developer and analyst who works across multiple projects, I struggled to 
            understand my true productivity patterns. Traditional time-tracking tools had 
            major limitations:
          </p>
          
          <div className="space-y-3 ml-4">
            <div className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-0.5 flex-shrink-0">•</span>
              <div>
                <span className="font-semibold text-gray-200">Manual logging tools</span>
                <span className="text-gray-400"> (Toggl, Clockify) required constant input and were easy to forget, leading to incomplete data</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-0.5 flex-shrink-0">•</span>
              <div>
                <span className="font-semibold text-gray-200">Basic screen time apps</span>
                <span className="text-gray-400"> showed raw numbers but no behavioral insights—just 
                "you used VS Code for 4 hours" without context</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-0.5 flex-shrink-0">•</span>
              <div>
                <span className="font-semibold text-gray-200">Calendar-based tracking</span>
                <span className="text-gray-400"> only captured scheduled work, missing spontaneous 
                deep work sessions and context-switching patterns</span>
              </div>
            </div>
          </div>

          <p className="leading-relaxed pt-2 font-semibold text-blue-300">
            Questions I needed answered:
          </p>

          <ul className="space-y-2 ml-4 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
              <span>Which applications do I consistently return to versus just use occasionally?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
              <span>When am I genuinely productive versus when am I just "busy"?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
              <span>What's my peak focus time during the day?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
              <span>How much context-switching am I actually doing?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
              <span>Which tools are essential to my workflow versus distractions?</span>
            </li>
          </ul>

          <div className="bg-gray-900/70 border-l-4 border-blue-500 p-4 rounded mt-4">
            <p className="font-semibold text-blue-300 mb-2">The Core Problem:</p>
            <p className="leading-relaxed">
              There was no solution that automatically collected accurate activity data 
              AND transformed it into insights that help me make better decisions about how I work.
            </p>
          </div>

          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 mt-4">
            "At the end of the day, dashboards are just expensive reporting if they don't 
            help people make better decisions. I needed a tool that would tell me the story 
            behind my work patterns—not just show me numbers."
          </blockquote>
        </div>
      </div>

{/* Section 3: Solution Approach */}
<div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
  <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
    <span className="text-3xl">⚙️</span>
    Solution Approach
  </h2>
  <div className="space-y-4 text-gray-300">
    
    <p className="leading-relaxed">
      My solution required building an <span className="text-blue-400 font-semibold">end-to-end data pipeline</span>—not 
      just a dashboard, but a complete ETL system with cloud infrastructure and security. Every technical decision 
      was driven by specific business and operational requirements.
    </p>

    {/* Architecture Overview */}
    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg p-4 border border-blue-700/50">
      <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
        <span>🏗️</span> System Architecture
      </h4>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-cyan-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">1</span>
          <span>
            <strong 
              className="text-cyan-300 cursor-help border-b border-dotted border-cyan-400 hover:border-cyan-300 transition-colors relative"
              onMouseEnter={() => setShowAWTooltip(true)}
              onMouseLeave={() => setShowAWTooltip(false)}
            >
              ActivityWatch
              {showAWTooltip && (
                <span className="absolute left-0 bottom-full mb-2 w-72 bg-gray-800 border border-gray-600 rounded-lg p-3 text-xs text-gray-300 shadow-xl z-50">
                  <strong className="text-cyan-300 block mb-1">Why ActivityWatch?</strong>
                  <ul className="space-y-1 ml-2">
                    <li>• <strong>Privacy-first:</strong> All data stored locally, never transmitted to external servers</li>
                    <li>• <strong>Open source:</strong> Auditable codebase, community-driven development</li>
                    <li>• <strong>No vendor lock-in:</strong> Full control over data and infrastructure</li>
                    <li>• <strong>Extensible:</strong> REST API enables custom integrations and analysis</li>
                  </ul>
                </span>
              )}
            </strong>
            {' '}→ Local data collection
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-purple-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">2</span>
          <span><strong className="text-purple-300">Python ETL Script</strong> → Extract, transform, enrich data</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-blue-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">3</span>
          <span><strong className="text-blue-300">Cloudflare R2</strong> → Cloud object storage for processed CSVs</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-yellow-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">4</span>
          <span><strong className="text-yellow-300">R2 Workers</strong> → Security layer & access control</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-orange-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">5</span>
          <span><strong className="text-orange-300">GitHub</strong> → Version control & source repository</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-pink-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">6</span>
          <span><strong className="text-pink-300">Kinsta Hosting</strong> → Automated deployment & CDN delivery</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <span className="text-green-400 font-mono text-xs bg-gray-800 px-2 py-1 rounded">7</span>
          <span><strong className="text-green-300">Live Website</strong> → Public-facing React application</span>
        </div>
      </div>
  
      <div className="mt-4 pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-400 italic">
          Full CI/CD pipeline: Code push to GitHub triggers automatic build and deployment to Kinsta with 
          custom domain and CDN distribution.
        </p>
      </div>
    </div>


    {/* Layer 1: Data Collection */}
    <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-cyan-500">
      <h4 className="font-semibold text-cyan-300 mb-3 flex items-center gap-2">
        <span>📊</span> Layer 1: Data Collection (ActivityWatch)
      </h4>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-cyan-200 font-semibold mb-1">Decision: ActivityWatch API Integration</p>
          <p className="text-gray-300 mb-2">
            <strong>Why:</strong> Needed automated, passive tracking without manual input. ActivityWatch runs locally, 
            respects privacy, and captures application-level activity with millisecond precision timestamps.
          </p>
          <p className="text-gray-400 italic">
            <strong>Business Reasoning:</strong> Manual time tracking has 40-60% error rates. Automation ensures 
            100% data completeness while eliminating user friction.
          </p>
        </div>
      </div>
    </div>

    {/* Layer 2: ETL Pipeline */}
    <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-purple-500">
      <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
        <span>🐍</span> Layer 2: ETL Pipeline (Python Script)
      </h4>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-purple-200 font-semibold mb-2">Data Transformation Pipeline</p>
          <p className="text-gray-300 mb-3">
            Custom Python script handles the complete ETL process—extracting raw ActivityWatch events, 
            transforming them into analytics-ready format, and loading to cloud storage.
          </p>

          <div className="space-y-2 ml-4">
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
              <div>
                <span className="text-purple-200 font-semibold">Extract:</span> Pulls data from ActivityWatch SQLite database
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
              <div>
                <span className="text-purple-200 font-semibold">Transform:</span> Cleans noise (&lt;30s events), merges sessions, 
                categorizes apps, extracts language metadata
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
              <div>
                <span className="text-purple-200 font-semibold">Enrich:</span> Calculates derived metrics (loyalty scores, 
                consistency ratings, anomaly flags)
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
              <div>
                <span className="text-purple-200 font-semibold">Load:</span> Exports processed data to CSV and pushes to Cloudflare R2
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-3 rounded mt-3">
            <p className="text-purple-200 font-semibold mb-1">Environment & Security</p>
            <p className="text-gray-300 text-xs">
              Uses environment variables and secrets management for API keys and R2 credentials—no hardcoded credentials in code.
            </p>
          </div>

          <p className="text-gray-400 italic mt-2">
            <strong>Business Reasoning:</strong> Separating data processing from visualization allows independent scaling 
            and easier debugging. Pipeline can run on schedule without frontend dependency.
          </p>
        </div>
      </div>
    </div>

    {/* Layer 3: Cloud Storage */}
    <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-blue-500">
      <h4 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
        <span>☁️</span> Layer 3: Cloud Storage (Cloudflare R2)
      </h4>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-blue-200 font-semibold mb-1">Decision: Cloudflare R2 Object Storage</p>
          <p className="text-gray-300 mb-2">
            <strong>Why:</strong> S3-compatible storage without egress fees. Stores processed CSV files 
            that frontend consumes.
          </p>
          <p className="text-gray-400 italic">
            <strong>Business Reasoning:</strong> Decouples data storage from application hosting. Frontend can be 
            static (fast, cheap) while data remains centralized and versioned.
          </p>
        </div>
      </div>
    </div>

    {/* Layer 4: Security Layer */}
    <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-yellow-500">
      <h4 className="font-semibold text-yellow-300 mb-3 flex items-center gap-2">
        <span>🔒</span> Layer 4: Security & Access Control (R2 Workers)
      </h4>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-yellow-200 font-semibold mb-2">Cloudflare Workers Security Layer</p>
          <p className="text-gray-300 mb-3">
            All data requests are proxied through Cloudflare Workers—direct access to R2 buckets is blocked. 
            Workers act as a security gateway.
          </p>

          <div className="bg-red-900/30 border-l-2 border-red-500 p-3 rounded">
            <p className="text-red-200 font-semibold mb-1 text-xs">🚫 Direct CSV Access: DENIED</p>
            <p className="text-gray-300 text-xs">
              Attempting to directly download or access raw CSV files from R2 URLs returns 403 Forbidden. 
              All requests must go through authenticated Worker endpoints.
            </p>
          </div>

          <div className="bg-green-900/30 border-l-2 border-green-500 p-3 rounded mt-2">
            <p className="text-green-200 font-semibold mb-1 text-xs">✓ Worker-Mediated Access: ALLOWED</p>
            <p className="text-gray-300 text-xs">
              Workers validate requests, apply rate limiting, log access patterns, and serve data only to authorized origins.
            </p>
          </div>

          <p className="text-gray-400 italic mt-3">
            <strong>Business Reasoning:</strong> Protects sensitive activity data from unauthorized access. Even if 
            bucket URLs leaked, data remains secure. Demonstrates understanding of zero-trust architecture.
          </p>
        </div>
      </div>
    </div>

    {/* Layer 5: Frontend */}
    <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-green-500">
      <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
        <span>🎨</span> Layer 5: Visualization Layer (React + TypeScript)
      </h4>
      <div className="space-y-3 text-sm">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-800/50 p-3 rounded">
            <p className="text-green-200 font-semibold mb-1">React + TypeScript</p>
            <p className="text-gray-300 mb-1 text-xs"><strong>Why:</strong> Type safety, component reusability, scalability</p>
            <p className="text-gray-400 text-xs italic">Add visualizations without breaking existing ones</p>
          </div>

          <div className="bg-gray-800/50 p-3 rounded">
            <p className="text-green-200 font-semibold mb-1">Recharts Library</p>
            <p className="text-gray-300 mb-1 text-xs"><strong>Why:</strong> Declarative, composable charts</p>
            <p className="text-gray-400 text-xs italic">Faster iteration on user feedback</p>
          </div>

          <div className="bg-gray-800/50 p-3 rounded">
            <p className="text-green-200 font-semibold mb-1">TailwindCSS</p>
            <p className="text-gray-300 mb-1 text-xs"><strong>Why:</strong> Rapid, consistent UI development</p>
            <p className="text-gray-400 text-xs italic">Professional appearance without CSS overhead</p>
          </div>

          <div className="bg-gray-800/50 p-3 rounded">
            <p className="text-green-200 font-semibold mb-1">Modular Components</p>
            <p className="text-gray-300 mb-1 text-xs"><strong>Why:</strong> Each viz is independent</p>
            <p className="text-gray-400 text-xs italic">Easy to test, maintain, extend</p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed pt-2">
          Frontend fetches processed CSV data through Worker endpoints, performs client-side calculations 
          for interactivity, and renders 24+ visualization components.
        </p>
      </div>

    {/* Layer 6: Deployment Pipeline */}
    <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-orange-500">
        <h4 className="font-semibold text-orange-300 mb-3 flex items-center gap-2">
        <span>🚀</span> Layer 6: Deployment Pipeline (GitHub → Kinsta)
        </h4>
        <div className="space-y-3 text-sm">
    
        <div>
            <p className="text-orange-200 font-semibold mb-2">CI/CD Implementation</p>
            <p className="text-gray-300 mb-3">
            Implemented automated deployment pipeline for zero-downtime updates and version control.
            </p>

            <div className="space-y-2">
            <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-orange-200 font-semibold mb-1 flex items-center gap-2">
                <span>📦</span> Version Control (GitHub)
                </p>
                <p className="text-gray-300 text-xs mb-1">
                Source code managed in GitHub repository with proper branching strategy
                </p>
                <p className="text-gray-400 text-xs italic">
                Business value: Change tracking, rollback capability, collaboration-ready
                </p>
            </div>

            <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-orange-200 font-semibold mb-1 flex items-center gap-2">
                <span>⚡</span> Automated Deployment (Kinsta)
                </p>
                <p className="text-gray-300 text-xs mb-1">
                Git push triggers automatic build and deployment to production
                </p>
                <p className="text-gray-400 text-xs italic">
                Business value: Fast iteration cycles, reduced manual deployment errors
                </p>
            </div>

            <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-orange-200 font-semibold mb-1 flex items-center gap-2">
                <span>🌐</span> Custom Domain & CDN
                </p>
                <p className="text-gray-300 text-xs mb-1">
                Professional domain (fayie.one) with global CDN distribution via Kinsta
                </p>
                <p className="text-gray-400 text-xs italic">
                Business value: Fast load times worldwide, professional branding
                </p>
            </div>

            <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-orange-200 font-semibold mb-1 flex items-center gap-2">
                <span>🔧</span> Production-Ready Infrastructure
                </p>
                <p className="text-gray-300 text-xs mb-1">
                Managed hosting with automatic SSL, DNS management, and uptime monitoring
                </p>
                <p className="text-gray-400 text-xs italic">
                Business value: Reliable, secure, maintainable production environment
                </p>
            </div>
            </div>

            <p className="text-gray-400 italic mt-3 text-xs">
            <strong>Business Reasoning:</strong> Automated deployment eliminates manual errors and enables rapid 
            iteration. Treating this as a production system (not a toy project) demonstrates understanding of 
            real-world software operations and DevOps practices.
            </p>
        </div>

        </div>
    </div>

    </div>

    <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded mt-4">
      <p className="font-semibold text-blue-300 mb-2">Complete Technology Stack:</p>
      <ul className="space-y-1 text-sm text-gray-300">
        <li>• <strong>Data Collection:</strong> ActivityWatch API (SQLite backend)</li>
        <li>• <strong>ETL Pipeline:</strong> Python with environment-based secrets management</li>
        <li>• <strong>Cloud Storage:</strong> Cloudflare R2 (S3-compatible object storage)</li>
        <li>• <strong>Security Layer:</strong> Cloudflare Workers for access control</li>
        <li>• <strong>Frontend:</strong> React, TypeScript, Recharts, TailwindCSS</li>
        <li>• <strong>Version Control:</strong> GitHub</li>
        <li>• <strong>Hosting:</strong> Kinsta with automated deployment pipeline</li>
        <li>• <strong>Infrastructure:</strong> Custom domain, CDN, SSL, DNS management</li>
      </ul>
    </div>

    {/* Dashboard Design Philosophy */}
    <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
      <h4 className="font-semibold text-blue-300 mb-2">Question-Driven Design</h4>
      <p className="text-sm text-gray-300 leading-relaxed mb-3">
        Every visualization answers a specific user question:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
        <div className="bg-gray-800/50 p-2 rounded">
          <span className="text-blue-300 font-semibold">"Where does my time go?"</span>
          <br />→ Category Distribution + Top Apps
        </div>
        <div className="bg-gray-800/50 p-2 rounded">
          <span className="text-blue-300 font-semibold">"When am I most productive?"</span>
          <br />→ Peak Windows + Rhythm Heatmap
        </div>
        <div className="bg-gray-800/50 p-2 rounded">
          <span className="text-blue-300 font-semibold">"How focused am I?"</span>
          <br />→ Session Length + Context Switches
        </div>
        <div className="bg-gray-800/50 p-2 rounded">
          <span className="text-blue-300 font-semibold">"What patterns am I missing?"</span>
          <br />→ Workflow Intelligence + Anomalies
        </div>
      </div>
    </div>

    {/* Why This Architecture Matters */}
    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/50 p-4 rounded">
      <p className="font-semibold text-purple-300 mb-2">The Business Analysis Perspective</p>
      <div className="space-y-1 text-sm text-gray-300">
        <p>• <strong>Systems Thinking:</strong> Designed for scalability, security, and maintainability—not just "make it work"</p>
        <p>• <strong>Data Governance:</strong> Implemented proper security controls and access patterns</p>
        <p>• <strong>ETL Understanding:</strong> Can design and implement full data pipelines, not just consume data</p>
        <p>• <strong>Cloud Infrastructure:</strong> Hands-on experience with modern cloud services and serverless architecture</p>
        <p>• <strong>DevOps Awareness:</strong> Secrets management, environment configuration, deployment pipelines</p>
      </div>
    </div>

  </div>
</div>


    {/* Section 4: Key Deliverables */}
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
      <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
        <span className="text-3xl">📦</span>
        Key Deliverables
      </h2>
      <div className="space-y-4 text-gray-300">
        <p className="leading-relaxed">
          Built <span className="text-blue-400 font-semibold">24+ interactive visualization components</span> organized 
          into 7 analytical dashboards, each answering specific business questions:
        </p>

        <div className="space-y-3">
          {/* Category 1 */}
          <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-300 mb-2">🧠 Advanced Analytics</h4>
            <ul className="space-y-1 ml-4 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Workflow Intelligence:</strong> 16 insight types analyzing DevTest ratios, peak hours, micro-breaks, sleep schedules, and sustainability patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Predictive Forecasting:</strong> 7-day productivity forecast using hybrid prediction models with recency weighting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Anomaly Detection:</strong> Statistical outlier identification for unusual activity patterns</span>
              </li>
            </ul>
          </div>

          {/* Category 2 */}
          <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-300 mb-2">⚙️ Technical Profiling</h4>
            <ul className="space-y-1 ml-4 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Tech Stack Breakdown:</strong> Language detection from file extensions with 30-day period-over-period trending</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Stack Evolution:</strong> Historical tracking of tech stack changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Development Stats:</strong> Lifetime coding statistics and file tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Language Velocity:</strong> 30-day language usage trends with momentum indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Project Classifier:</strong> Auto-categorizes projects by dominant language/framework</span>
              </li>
            </ul>
          </div>

          {/* Category 3 */}
          <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-300 mb-2">🔀 Behavioral Analysis</h4>
            <ul className="space-y-1 ml-4 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1 flex-shrink-0">→</span>
                <span><strong>App Loyalty Meter:</strong> Tiers (Loyal/Committed/Regular/Casual) with session analytics and peak day detection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Transition Network:</strong> Multi-step workflow pattern detection with loop identification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Context Switch Analysis:</strong> Quantifies switching frequency and impact on focus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Session Length Distribution:</strong> Focus quality analysis (noise/short/medium/long sessions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Consistency Tracker:</strong> Habit formation and productivity consistency scoring</span>
              </li>
            </ul>
          </div>

          {/* Category 4 */}
          <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-300 mb-2">⏰ Time & Rhythm Analysis</h4>
            <ul className="space-y-1 ml-4 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Peak Activity Windows:</strong> Identifies 2-4 hour deep work blocks with category dominance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Activity Rhythm Heatmap:</strong> Hour-by-day pattern visualization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Hourly Activity Breakdown:</strong> Granular time-of-day analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Work-Life Balance:</strong> Productive vs leisure time distribution</span>
              </li>
            </ul>
          </div>

          {/* Category 5 */}
          <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-cyan-500">
            <h4 className="font-semibold text-cyan-300 mb-2">📊 Summary & Overview</h4>
            <ul className="space-y-1 ml-4 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Category Distribution:</strong> Time allocation across activity types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Top Apps Bar Chart:</strong> Most-used applications ranking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1 flex-shrink-0">→</span>
                <span><strong>Total Time Card:</strong> Aggregate statistics overview</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded mt-4">
          <p className="font-semibold text-blue-300 mb-2">Technical Implementation:</p>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• <strong>Frontend:</strong> React/TypeScript with Recharts for interactive visualization</li>
            <li className="group relative">
              • <strong>Data Collection:</strong>{' '}
              <span 
                className="relative cursor-help border-b border-dotted border-blue-400 hover:border-blue-300 transition-colors"
                onMouseEnter={() => setShowAWTooltip(true)}
                onMouseLeave={() => setShowAWTooltip(false)}
              >
                ActivityWatch
                {showAWTooltip && (
                  <span className="absolute left-0 bottom-full mb-2 w-72 bg-gray-800 border border-gray-600 rounded-lg p-3 text-xs text-gray-300 shadow-xl z-50">
                    <strong className="text-blue-300 block mb-1">Why ActivityWatch?</strong>
                    <ul className="space-y-1 ml-2">
                      <li>• <strong>Privacy-first:</strong> All data stored locally, never transmitted to external servers</li>
                      <li>• <strong>Open source:</strong> Auditable codebase, community-driven development</li>
                      <li>• <strong>No vendor lock-in:</strong> Full control over data and infrastructure</li>
                      <li>• <strong>Extensible:</strong> REST API enables custom integrations and analysis</li>
                    </ul>
                  </span>
                )}
              </span>
              {' '}API integration for automated tracking
            </li>
            <li>• <strong>ETL Pipeline:</strong> Python for data transformation and enrichment</li>
            <li>• <strong>Cloud Infrastructure:</strong> Cloudflare R2 storage with Worker-based security layer</li>
            <li>• <strong>Data Protection:</strong> Zero-trust access controls—direct file access blocked, all requests proxied through authenticated Workers</li>
            <li>• <strong>Deployment:</strong> CI/CD via GitHub to Kinsta with automated builds</li>
            <li>• <strong>UI/UX:</strong> TailwindCSS for responsive design with interactive filtering, tooltips, and drill-down capabilities</li>
            <li>• <strong>Algorithms:</strong> Custom logic for pattern detection, session merging, anomaly identification, and predictive forecasting</li>
          </ul>
        </div>
      </div>
    </div>

{/* Section 5: Results & Lessons Learned */}
<div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
  <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
    <span className="text-3xl">💡</span>
    Results & Lessons Learned
  </h2>
  <div className="space-y-4 text-gray-300">
    
    {/* Quantifiable Results */}
    <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
      <p className="font-semibold text-blue-300 mb-3">Measurable Impact:</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-blue-400 font-bold">✓</span>
          <span><strong>Automated data collection:</strong> Reduced time-to-insight from hours of manual tracking to instant, automated analysis</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-blue-400 font-bold">✓</span>
          <span><strong>24+ visualizations:</strong> Each answering specific productivity questions without requiring manual interpretation</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-blue-400 font-bold">✓</span>
          <span><strong>Daily usage:</strong> Currently used for personal productivity optimization and decision-making</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-blue-400 font-bold">✓</span>
          <span><strong>Zero friction:</strong> No manual input required—data collection runs passively in the background</span>
        </div>
      </div>
    </div>

    {/* BA Skills Demonstrated */}
    <div className="bg-green-900/30 border-l-4 border-green-500 p-4 rounded">
      <p className="font-semibold text-green-300 mb-3">Business Analysis Skills Demonstrated:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-green-300 font-semibold mb-1">Requirements Engineering:</p>
          <p className="text-gray-300">Identified stakeholder needs through self-reflection and gap analysis of existing tools</p>
        </div>
        <div>
          <p className="text-green-300 font-semibold mb-1">Solution Design:</p>
          <p className="text-gray-300">Architected a scalable, modular dashboard system with reusable components</p>
        </div>
        <div>
          <p className="text-green-300 font-semibold mb-1">Data Modeling:</p>
          <p className="text-gray-300">Designed data transformation pipelines from raw events to actionable insights</p>
        </div>
        <div>
          <p className="text-green-300 font-semibold mb-1">User-Centered Design:</p>
          <p className="text-gray-300">Built iteratively based on real usage, refining visualizations for clarity</p>
        </div>
      </div>
    </div>

    {/* Key Lessons */}
    <div className="space-y-3 pt-2">
      <p className="font-semibold text-blue-300">Key BA Takeaways:</p>
      
      <div className="space-y-3">
        <div className="bg-gray-900/50 p-3 rounded border-l-2 border-yellow-500">
          <p className="font-semibold text-yellow-300 mb-1">
            1. Understanding the 'why' is more important than the 'what'
          </p>
          <p className="text-sm text-gray-300">
            Users don't want dashboards—they want answers. By focusing on specific questions stakeholders 
            need answered, I created visualizations that drive action rather than just displaying data. 
            This mirrors professional BA work: always start with the business problem, not the solution.
          </p>
        </div>

        <div className="bg-gray-900/50 p-3 rounded border-l-2 border-purple-500">
          <p className="font-semibold text-purple-300 mb-1">
            2. Less is more when each element has purpose
          </p>
          <p className="text-sm text-gray-300">
            My initial version had too many metrics. Through self-testing, I realized overwhelming users 
            with data is counterproductive. The best dashboards are focused, scannable, and opinionated 
            about what matters. Every visualization should answer a specific question.
          </p>
        </div>

        <div className="bg-gray-900/50 p-3 rounded border-l-2 border-cyan-500">
          <p className="font-semibold text-cyan-300 mb-1">
            3. Iterative refinement beats perfect planning
          </p>
          <p className="text-sm text-gray-300">
            I didn't build all 24 components at once. I started with basic time tracking, identified 
            gaps through usage, and incrementally added sophisticated features like forecasting and 
            anomaly detection. This agile approach mirrors how BAs should work with stakeholders—
            deliver value early, learn, and iterate.
          </p>
        </div>

        <div className="bg-gray-900/50 p-3 rounded border-l-2 border-red-500">
          <p className="font-semibold text-red-300 mb-1">
            4. Technical depth enables business value
          </p>
          <p className="text-sm text-gray-300">
            The sophisticated algorithms (forecasting, pattern detection, session merging) aren't 
            just for show—they directly enable better business decisions. Good BAs need enough 
            technical understanding to bridge the gap between what's technically possible and 
            what's business-valuable.
          </p>
        </div>
      </div>
    </div>

    {/* Philosophy Statement */}
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 mt-4 bg-gray-900/50 p-4 rounded">
      <p className="mb-2">
        "This project reinforced my core belief about analytics work: 
        <span className="text-blue-400 font-semibold not-italic"> dashboards are just expensive reporting 
        if they don't help people make better decisions.</span>
      </p>
      <p>
        We analysts aren't doing our jobs if we don't understand the data at a fundamental level. 
        You can't create stories if you don't understand the plot yourself."
      </p>
    </blockquote>

    {/* Professional Application */}
    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 p-4 rounded mt-4">
      <p className="font-semibold text-blue-300 mb-2">How This Applies to Professional BA Work:</p>
      <p className="text-sm text-gray-300 leading-relaxed">
        The same principles I applied here—understanding stakeholder needs, designing for actionability, 
        iterating based on feedback, and balancing technical sophistication with usability—are exactly 
        what I bring to business analysis roles. Whether it's productivity analytics, operational 
        dashboards, or business intelligence, the process is the same: 
        <span className="text-blue-400 font-semibold"> listen, analyze, build, deliver, refine.</span>
      </p>
    </div>

  </div>
</div>

{/* Enhanced Footer */}
<div className="mt-8 pt-6 pb-4 border-t border-gray-700">
  <div className="text-center space-y-3">
    <p className="text-gray-400 text-sm">
      This methodology demonstrates my approach to business analysis: 
      understanding problems deeply before building solutions.
    </p>
    <p className="text-gray-500 text-xs">
      Visual Stream is actively maintained and continuously improved based on real-world usage.
      <br />
      Built with React, TypeScript, Recharts, and TailwindCSS.
    </p>
    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2">
      <span className="flex items-center gap-1">
        <span className="text-green-400">●</span> 24+ Components
      </span>
      <span className="flex items-center gap-1">
        <span className="text-blue-400">●</span> 7 Dashboard Views
      </span>
      <span className="flex items-center gap-1">
        <span className="text-purple-400">●</span> Automated Data Collection
      </span>
    </div>
  </div>
</div>

    </div>
  );
};

export default AWMethodology;
