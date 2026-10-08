# Minh Tran Cong | Quantitative Trader Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
</div>

## Introduction

Personal portfolio of **Minh Tran Cong**, a quantitative trader focused on crypto market making, inventory hedging and systematic strategies. It is a single-page React site with interactive 3D scenes (React Three Fiber), a work timeline, a skills grid, project cards and a working contact form.

Live site: https://minhtranc1991.github.io

## Acknowledgements

This project would not exist without the work of others. Thank you:

- **[Adrian Hajdin](https://github.com/adrianhajdin) / JavaScript Mastery** for the original [3D Developer Portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) and its tutorial, which this site is ultimately based on.
- **[TacticalReader](https://github.com/TacticalReader)** for [Portfolio](https://github.com/TacticalReader/Portfolio), the enhanced version (new design system, greeting widget, project cards, CTA buttons) that I used as the direct starting point.
- **Yolala1232** for the 3D model ["Gaming Desktop PC"](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66) and **cmzw** for ["Stylized planet"](https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70), both under [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/) and credited as the licence requires.
- The maintainers of React, Three.js, React Three Fiber / Drei, Framer Motion, Tailwind CSS, Vite, EmailJS and the other open-source libraries below.

Cảm ơn anh/chị/bạn Adrian Hajdin và TacticalReader đã chia sẻ mã nguồn mở. Mình đã thay toàn bộ nội dung, dữ liệu và một phần giao diện bằng thông tin của mình.

> **Licence note**: neither upstream repository declares a licence. Please confirm with the original authors before reusing this code beyond personal use.

## Features

- **Interactive 3D**: hero desktop model, 3D Earth in the contact section and a starfield background (React Three Fiber + Drei).
- **Experience timeline** with a pulsing "Current" badge for present roles.
- **Skills grid** grouped as Core / Data / Tools.
- **Project cards** with tilt effect and tag chips.
- **Contact form** sending email through EmailJS, with toast notifications.
- **Responsive layout**, scroll-to-top, greeting widget and a "View My Work" call-to-action.

## Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [React Router](https://reactrouter.com/)
- **3D**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei), [Maath](https://github.com/pmndrs/maath)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI utilities**: [react-icons](https://react-icons.github.io/react-icons/), [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt), [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline), [react-toastify](https://fkhadra.github.io/react-toastify/), [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2)
- **Contact form**: [EmailJS](https://www.emailjs.com/)
- **Deploy**: GitHub Actions to GitHub Pages

## Getting Started

Requires **Node.js 20+** (the CI uses Node 22).

```bash
git clone https://github.com/minhtranc1991/minhtranc1991.github.io.git
cd minhtranc1991.github.io
npm install
```

Create a `.env` file in the project root for the contact form:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should use the variables `from_name`, `from_email`, `to_email` and `message`.

```bash
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Customising Content

Almost everything lives in [src/constants/index.js](src/constants/index.js): navigation, services, technologies, experience and projects. Section copy is in the matching file under `src/components/`.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

1. Repo **Settings > Pages > Source**: choose **GitHub Actions**.
2. Repo **Settings > Secrets and variables > Actions**: add `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`.

## Project Structure

```
.
├── .github/workflows/      # GitHub Pages deploy workflow
├── legacy/                 # Previous plain HTML/CSS version
├── public/
│   ├── desktop_pc/         # 3D model (CC-BY-4.0) + licence
│   └── planet/             # 3D model (CC-BY-4.0) + licence
├── src/
│   ├── assets/             # Logo, portrait, project images
│   ├── components/
│   │   ├── canvas/         # 3D scenes: Computers, Earth, Stars, Ball
│   │   ├── About.jsx  Experience.jsx  Tech.jsx  Works.jsx
│   │   ├── Contact.jsx  Hero.jsx  Navbar.jsx  Greeting.jsx
│   │   └── CTAButtons.jsx  ScrollToTop.jsx  Loader.jsx
│   ├── constants/index.js  # All site content
│   ├── hoc/                # SectionWrapper
│   ├── utils/motion.js     # Framer Motion variants
│   ├── App.jsx  main.jsx  index.css  mobile.css  styles.js
├── index.html  vite.config.js  tailwind.config.cjs  postcss.config.cjs
└── package.json
```

## Contact

- Email: minh.tranc.1991@gmail.com
- GitHub: [@minhtranc1991](https://github.com/minhtranc1991)
