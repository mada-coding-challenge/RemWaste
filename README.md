# Remwaste

# 🛠️ Choose Your Skip Size – React UI


This project is a responsive React-based frontend that allows users to select a skip size from a dynamic list fetched via API. It features a modern layout, smooth UI animations, loading skeletons, and a bottom navigation bar — all styled with Tailwind CSS and DaisyUI, and enhanced with Framer Motion.


---

## ✨ Features<br> <br>

- Fetches skip size data from a remote API
- Responsive grid layout using Tailwind CSS + DaisyUI
- Skeleton loaders while data loads
- Selection highlighting for chosen skip
- Bottom navigation bar with “Back” and “Next” buttons
- Smooth button animations with Framer Motion
- Background pattern using CSS variables
- Photoshop used for image design (if any assets are included)

## 🧰 Technologies Used <br>


| Left-aligned | Center-aligned | Right-aligned |

| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |


| Technology       | Purpose                                   |
|:---              | ---:                                      |
| React            | Frontend framework                        |
| Axios            | HTTP requests to fetch skip data          |
| Tailwind CSS     | Utility-first styling framework           |
| DaisyUI          | Tailwind CSS UI components                |
| Framer Motion    | Declarative animations and transitions    |
| Vite             | Fast React build & dev environment        |
| Photoshop        | Image editing for any assets or icons     |


## 📦 Project Structure
<br> <br>
src/
├── App.jsx # Main application component
├── components/
│ ├── Card.jsx # (Assumed) Displays skip card info
│ ├── SkeletonCard.jsx # Loading skeleton for cards
│ ├── BottomNavbar.jsx # Bottom nav bar with back/next
│ └── Button.jsx # Animated circular button
├── index.css # Tailwind + DaisyUI + background styling
<br> <br>
---
<br> <br>
## 🚀 Getting Started
<br> <br>
### ✅ Prerequisites
<br> <br>
Make sure you have these installed:
<br> <br>
- [Node.js](https://nodejs.org/) (v16 or higher) <br> 
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)<br> 
<br> <br>
---
<br> <br>
### 📥 Installation<br> <br>

1. **Clone the repository:**
<br> <br>
```bash
git clone https://github.com/your-username/your-repo.git <br>
cd your-repo <br>

npm install <br>

npm run dev <br>

npm install -D tailwindcss postcss autoprefixer <br>
npm install daisyui <br>
<code>

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
</code>

npm install framer-motion <br>
npm install axios <br>
<br><br>
# 📝 Notes
<br><br>
This project is a frontend React application that consumes skip data from a live external API. Below are important notes regarding API usage, limitations, and project scope.
<br>
---
<br>
## 🔗 API Endpoint
<br>
The application fetches data from the following endpoint:
<br>
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
<br><br>
---
<br><br>
## 🧪 Sandbox Link
<br><br>
You can test and explore the project live in your browser using the sandbox link below. This is useful for quickly previewing the UI without needing to set up a local environment. <br>
🔗[👉 View on StackblitZ]([https://codesandbox.io/your-sandbox-link-here](https://stackblitz.com/edit/vitejs-vite-xydn2zka?file=src%2FApp.jsx,src%2Fcomponents%2FCard.jsx,src%2Fcomponents%2FButton.jsx,src%2Fcomponents%2FSkeletonCard.jsx,src%2Fcomponents%2FBottomNavbar.jsx,src%2Findex.css,src%2FApp.css)<br>
<br>

### 🚀 Live Preview
<br><br>
 
🔗[👉 View on Netlify]([https://enchanting-choux-7bb944.netlify.app/])))