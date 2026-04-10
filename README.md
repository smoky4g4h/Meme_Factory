# 🏭 The Meme Factory

> A meme browser where users can search for famous templates and see how they are used.

![The Meme Factory](https://img.shields.io/badge/memes-infinite-yellow?style=for-the-badge)
![API](https://img.shields.io/badge/Powered%20by-Imgflip%20API-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

---

## 📖 Overview

The Meme Factory is a fully client-side meme browser that lets users explore, search, and share the most popular meme templates on the internet. Powered by the [Imgflip Public API](https://imgflip.com/api), it features a Pinterest-style masonry grid layout, category filtering, and a live Meme Creator with real-time text overlay preview.

---

## ✨ Features

### Core Features
- 🔍 **Searchable Meme Grid** — Instantly filter memes by name as you type
- 🗂️ **Category Tabs** — Browse memes organized by category
- 📤 **Share Button** — Copy a direct link to any meme template to your clipboard
- ⬆️ **Back to Top** — Smooth scroll button that appears as you scroll down
- 🖼️ **Aspect Ratio Handling** — Gracefully handles images of all shapes and sizes

### UI / Layout
- 🧱 **Masonry Grid Layout** — Pinterest-style dynamic grid that adapts to varying image heights

### Challenge Feature
- 🎨 **Meme Creator** — Select any template, type your top and bottom text, and see a live preview with text rendered directly over the image

---

## 🚀 Getting Started

---

## 🌐 API Reference

This project uses the **Imgflip Public API**.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `https://api.imgflip.com/get_memes` | `GET` | Returns the 100 most popular meme templates |

**API Docs:** https://imgflip.com/api

> No API key is required for fetching meme templates. The Meme Creator preview is rendered client-side using the Canvas API and does not call the Imgflip caption endpoint.

---

## 🎨 UI Design Decisions

- **Masonry Grid**: Uses CSS columns (or a JS masonry library) to handle meme templates with wildly different aspect ratios — tall, wide, square — without awkward whitespace.
- **Live Text Preview**: The Meme Creator uses the HTML5 `<canvas>` element to draw the selected meme image and overlay user-typed text in real time, mimicking classic meme font styling (bold Impact with black stroke).
- **Share via Clipboard**: Clicking "Share" on any meme card uses the `navigator.clipboard` API to copy the Imgflip template URL, with a brief visual confirmation toast.
- **Back to Top**: The button appears only after the user scrolls past a threshold and smoothly returns them to the top of the page.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Masonry layout, responsive design, animations |
| Vanilla JavaScript | API calls, DOM manipulation, Canvas API |
| Imgflip API | Meme template data |

> No frameworks or build tools — just plain HTML, CSS, and JS.

---

## 🙏 Acknowledgements

- [Imgflip](https://imgflip.com) for providing the free public meme API
- The entire internet, for making memes what they are today

---

<p align="center">Made with 😂 and too much free time</p>

Thanks
