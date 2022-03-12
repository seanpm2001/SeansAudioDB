#!/bin/sh
# Start of script
# Download FFmpeg

# Ubuntu method (old)
def install_FFmpeg_UbuntuOldMethod() {
  sudo apt-get ffmpeg
  break;
}

# Ubuntu method (new/bad)
def install_FFmpeg_UbuntuNewMethod() {
  sudo apt install ffmpeg
  break;
}

# Fedora method (old)
def install_FFmpeg_FedoraNewMethod() {
  sudo dnf install ffmpeg
  break;
}

# Fedora method (new)
def install_FFmpeg_FedoraNewMethod() {
  sudo yum install ffmpeg
  break;
}

# File info
# File type: Shell script file
# File version: 1 (2022, Friday, March 11th at 7:15 pm)
# Line count (including blank lines and compiler line): 35

# End of script
