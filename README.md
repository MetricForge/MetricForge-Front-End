# MetricForge - Business Analytics Platform

> Professional analytics platform demonstrating BA methodology and full-stack development capabilities. Features 24+ interactive visualizations, predictive analytics, and real-time productivity insights.

**Live Demo:** [https://metricforge.dev](https://metricforge.dev)

---

## 📊 Overview

MetricForge is a production-grade analytics dashboard built to demonstrate end-to-end business analysis methodology and technical implementation. The platform processes ActivityWatch time-tracking data to provide comprehensive productivity insights through interactive visualizations, predictive modeling, and behavioral pattern analysis.

### Key Features

- **24+ Interactive Visualizations** - Real-time charts including heatmaps, network graphs, trend analysis, and forecasting
- **Predictive Analytics** - Machine learning-based productivity forecasting and anomaly detection
- **Comprehensive Methodology** - Full BA documentation including requirements, user stories, and system design
- **Cloud Architecture** - Serverless infrastructure with Cloudflare Workers and R2 storage
- **Responsive Design** - Mobile-first interface built with Tailwind CSS
- **Real-time Processing** - ETL pipeline handling 100K+ activity records

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI architecture
- **TypeScript** - Type-safe development
- **Recharts** - Data visualization library
- **Tailwind CSS** - Utility-first styling
- **Vite** - Next-generation build tool
- **PapaParse** - CSV parsing for data processing

### Backend & Infrastructure
- **Cloudflare Workers** - Serverless edge computing
- **R2 Storage** - Object storage for data files
- **Python** - ETL pipeline and data processing
- **ActivityWatch** - Time-tracking data source

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**





### OTHERS




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
