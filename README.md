# Portfolio Website - Setup Instructions

## API Key Configuration

This portfolio includes an AI chat widget that requires a Gemini API key. Follow these steps to set it up:

### Option 1: Using config.js (Recommended for development)

1. Open `config.js`
2. Replace `'YOUR_API_KEY_HERE'` with your actual Gemini API key:
   ```javascript
   GEMINI_API: {
       KEY: 'your-actual-api-key-here',
       URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
   }
   ```

### Option 2: Using Environment Variables (Recommended for production)

1. Set the environment variable:
   ```bash
   export GEMINI_API_KEY=your-actual-api-key-here
   ```

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and use it in your configuration

## Security Notes

- **Never commit API keys to version control**
- The `config.js` file is included in the repository with a placeholder
- For production deployment, use environment variables
- The chat widget will gracefully handle missing API keys

## Features

- Responsive design
- AI-powered chat widget
- Modern glassmorphism UI
- Smooth animations
- Mobile-optimized

## Projects & Links

<p align="center">
   <a href="mailto:seelamvamsisivaganesh@gmail.com">
      <img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
   </a>
   <a href="https://github.com/Svamsi2006">
      <img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
   </a>
   <a href="https://vamsisivaganesh.vercel.app">
      <img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-3B82F6?style=for-the-badge&logo=firefox&logoColor=white">
   </a>
   <a href="https://www.linkedin.com/in/vamsi-/">
      <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white">
   </a>
   <a href="https://www.instagram.com/__vamsi__2006/">
      <img alt="Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
   </a>
</p>

## Selected Projects

| Project | Summary | Links |
| --- | --- | --- |
| Sales Dashboard | Google Sheets powered dashboard with chatbot automations via n8n. | [![Live](https://img.shields.io/badge/Live-FF8C00?style=flat-square&logo=netlify&logoColor=white)](https://comic.lovable.app/) [![Code](https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white)](https://comic.lovable.app/) |
| Data Visualization Dashboard | Indian Census exploratory data analysis and interactive dashboards. | [![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Svamsi2006/India-Census-EDA-Project) |
| Predictive Analytics Model | Loan default prediction built with Scikit-learn and TensorFlow. | [![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Svamsi2006/Ciperschool-project) |
| Data Visualization Web Interface | Upload JSON files to generate browser based dashboards instantly. | [![Live](https://img.shields.io/badge/Live-00C7B7?style=flat-square&logo=vercel&logoColor=white)](https://svamsi2006.github.io/data-visualization-dashboardd/#) [![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Svamsi2006/data-visualization-dashboardd?tab=readme-ov-file) |
| Interest Calculator | Multi-language savings and interest calculator with paper style breakdowns. | [![Live](https://img.shields.io/badge/Live-00C7B7?style=flat-square&logo=vercel&logoColor=white)](https://svamsi2006.github.io/intrest_calculator/) |
| Balaveerulu | AI comic book platform bringing kids into customised stories. | [![Portfolio](https://img.shields.io/badge/Balaveerulu-4C1D95?style=flat-square&logo=vercel&logoColor=white)](https://balaveerulu.vercel.app/) |
| Unifix | Marketplace connecting students for fast, peer-driven support. | [![Portfolio](https://img.shields.io/badge/Unifix-0F172A?style=flat-square&logo=vercel&logoColor=white)](https://unifix.lovable.app/) |
| Learn Crazy | AI powered adaptive learning experiences with real-time tutoring. | [![Portfolio](https://img.shields.io/badge/Learn%20Crazy-2563EB?style=flat-square&logo=vercel&logoColor=white)](https://learn-crazy.lovable.app/) |
| AI Chatbot & Photo Enhancer | Conversational assistant that also upgrades image quality. | [![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Svamsi2006/ai-photo-enhancer) |

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Configuration file
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Deployment

When deploying to production:

1. Set `GEMINI_API_KEY` as an environment variable on your hosting platform
2. Consider implementing a backend proxy for API calls for additional security
3. Remove or secure the config.js file

## Contact

If you'd like to connect, collaborate, or invite me to a project, feel free to reach out:

- Email: [seelamvamsisivaganesh@gmail.com](mailto:seelamvamsisivaganesh@gmail.com)
- LinkedIn: [linkedin.com/in/vamsi-/](https://www.linkedin.com/in/vamsi-/)
- Portfolio: [vamsisivaganesh.vercel.app](https://vamsisivaganesh.vercel.app)
