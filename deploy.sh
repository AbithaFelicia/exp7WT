#!/bin/bash
# Build and deploy to GitHub Pages
npm run build
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
