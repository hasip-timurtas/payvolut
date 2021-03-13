#!/bin/bash
yarn build
scp -rp ./dist/* dist/.htaccess root@95.179.168.245:/home/payvolut/public_html