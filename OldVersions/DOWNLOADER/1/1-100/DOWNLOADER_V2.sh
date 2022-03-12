#!/bin/sh
# Start of script
# Download the video downloaders I use

# YouTube-DL
# It is getting a bit dated now, and eventually it will stop working, as it hasn't been maintained for over 6 months. I don't use YT-DLP yet, but it is now an option here

# Ubuntu method (old)
def install_YouTube-DL_UbuntuOldMethod() {
  sudo apt-get youtube-dl
  break;
}

# Ubuntu method (new/bad)
def install_YouTube-DL_UbuntuNewMethod() {
  sudo apt install youtube-dl
  break;
}

# Fedora method (old)
def install_YouTube-DL_FedoraNewMethod() {
  sudo dnf install youtube-dl
  break;
}

# Fedora method (new)
def install_YouTube-DL_FedoraNewMethod() {
  sudo yum install youtube-dl
  break;
}

# YouTube-DLP

# I don't use it yet, but I will switch to it in the future.

# Ubuntu method (old)
def install_YouTube-DLP_UbuntuOldMethod() {
  sudo apt-get youtube-dlp
  break;
}

# Ubuntu method (new/bad)
def install_YouTube-DLP_UbuntuNewMethod() {
  sudo apt install youtube-dlp
  break;
}

# Fedora method (old)
def install_YouTube-DLP_FedoraNewMethod() {
  sudo dnf install youtube-dlp
  break;
}

# Fedora method (new)
def install_YouTube-DLP_FedoraNewMethod() {
  sudo yum install youtube-dlp
  break;
}

# Other video player (alternate for rare cases, or when YouTube-DL goes down to a false DMCA claim)

# Firefox: VideoDownloadHelper

# File info
# File type: Shell script file
# File version: 2 (2022, Friday, March 11th at 7:10 pm)
# Line count (including blank lines and compiler line): 70

# End of script
