#!/bin/bash
middleman build
cd ../blunckr.github.io
rm -rf *
cp -r ../blog/build/* ./
git add .
git commit --allow-empty-message -m ''
git push -u --force origin master

