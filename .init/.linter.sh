#!/bin/bash
cd /home/kavia/workspace/code-generation/streamview-platform-134874/video_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

