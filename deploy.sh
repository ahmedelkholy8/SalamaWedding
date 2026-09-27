#!/bin/bash

# Deploy script for GitHub Pages
# Run this script to build and deploy your wedding invitation

echo "🚀 Building wedding invitation..."
npm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Push all files to GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy wedding invitation'"
echo "   git push origin main"
echo ""
echo "2. Go to your GitHub repository"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to Settings → Pages"
echo "   - Under 'Source', select 'GitHub Actions'"
echo "   - Wait 1-2 minutes for deployment"
echo ""
echo "4. Your site will be live at:"
echo "   https://ahmedelkholy8.github.io/SalamaWedding/"
echo ""
echo "🎉 Done!"
