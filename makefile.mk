# Start of script
# The Makefile for this project
# Rename the secondary copying license
# Since I don't know how to just rename a file, I will copy it and delete the original, that is as close as I can get with GNU Make right now
copy /COPYINGL to /COPYING
rm -f /COPYINGL
echo "COPYING license file has been corrected."
wait 50
break
# For fixing the music directory issue
# echo "WARNING! This action involves copying and deleting over 300 gigabytes of data, and over 20000 files. This may take time and resources. Do you wish to continue?")
#wait
#copy ...
# Wait, I have a better idea!
copy /Audio to /audio
wait 1000 # Waits 1000 milliseconds (1 second) before continuing
rename /Music to /"Audio"
wait 1000 # See above
rename /audio to /Audio
wait 50
break
# I can't find a more efficient way
# This is pseudocode and likely will not work.

# This syntax isn't valid yet, I don't know how to write in GNU Make very well
# File info
# File type: Makefile (MAKEFILE, *.mk)
# File version: 2 (Thursday, August 26th 2021 at 7:17 pm)
# Line count (including blank lines and compiler line): 31
# End of script
