
***

# SeansAudioDB Docs

## 2023 / YT-DLP / 01_January / 05 / New-Strategy

I have been putting off downloads for quite some time, as I haven't had the time to properly research the method of downloading audio and video separately. I finally made the time for it today.

> **Note** Make sure to replace `https://www.example.com` with the domain you are trying to download from. [example.com](https://www.example.com/) does not have any videos on it.

### Find info

Here is how to find the supported formats for each video before download:

```shell
yt-dlp https://www.example.com#Test-download --list-formats
```

### Audio

I still have to convert files manually, but this will grab the audio separately. I have to do 2 separate downloads.

```shell
yt-dlp https://www.example.com -f m4a
```

If M4A isn't available, try:

```shell
yt-dlp https://www.example.com -f mp3
```

Or:

```shell
# No example
```

So far, I have not run into any cases where M4A isn't a supported audio format, but I have never found an instance where MP3 is supported.

### Video

Just do the same usual process, I just needed the audio separate.

```shell
yt-dlp https://www.example.com
```

Alternatively, (for non-personal use)

```shell
yt-dlp https://www.example.com -f webm
```

or:

```shell
yt-dlp https://www.example.com -f mp4
```

or even:

```shell
yt-dlp https://www.example.com -f mkv
```

***

**File version:** `1 (2023, Thursday, January 5th at 9:41 pm PST)`

***
