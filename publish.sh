#!/bin/bash
middleman build
cd ../blunckr.github.io
rm -rf *
rm -rf .git
cp -r ../blog/build/* ./
git init
git add .
git commit --allow-empty-message -m ''
git remote add origin git@github.com:blunckr/blunckr.github.io.git
git push -u --force origin master

