pnpm build
cd dist
git init
git add -A
git commit -m 'chore: deploy'
git push -f git@github.com:teclu/Baseg-Chat-Website.git master:gh-pages
cd ..