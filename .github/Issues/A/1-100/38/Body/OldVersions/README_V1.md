
***

# Markdown link issue 2022 November 4th

**Location:** [`https://github.com/seanpm2001/SeansAudioDB/tree/master/Music/1.1%20Music%20(GitHub)/Part%201/Ukraine_National_Anthem/2022/Daily`](https://github.com/seanpm2001/SeansAudioDB/tree/master/Music/1.1%20Music%20(GitHub)/Part%201/Ukraine_National_Anthem/2022/Daily)

I have been having difficulty getting the top 2 links in this Markdown table to render and work properly. I have the other 4 links working, but I just can't figure out why the top 2 won't work. I have made several attempts over the past 4 days. Here is the current (latest) table source code

```
| **🇺🇦️** | **📂️** |
|---|---|
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg) |
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo3.mp3) |
| `Marcus_Paus_'Slava Ukraini'.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/MP3/Slava_Ukraini!.mp3`](/Music/1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini!/AudioOnly/MP3/Slava_Ukraini!.mp3) |
| `Marcus_Paus_'Slava Ukraini'.ogg` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/OGG/Slava_Ukraini!.ogg`](/Music/1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini!/AudioOnly/OGG/Slava_Ukraini!.ogg) |
| `National_anthem_of_Ukraine,_instrumental.oga.ogx` | **Location:** [`///1.1 Music (GitHub)/Part 1/Ukraine_National_Anthem/US_Navy_Band/OGX/National_anthem_of_Ukraine,_instrumental.oga.ogx`](/Music//1.1%20Music%20(GitHub)/Part%201/Ukraine_National_Anthem/US_Navy_Band/OGX/National_anthem_of_Ukraine,_instrumental.oga.ogx) |
| `Ukrainian_national_anthem_1916_(complete).ogg` | **Location:** [`///1.1 Music (GitHub)/Part 1/Ukraine_National_Anthem/Original/1916/OGG/Ukrainian_national_anthem_1916_(complete).ogg`](/Music//1.1%20Music%20(GitHub)/Part%201/Ukraine_National_Anthem/Original/1916/OGG/Ukrainian_national_anthem_1916_(complete).ogg) |
```

Here is how it currently renders:

| **🇺🇦️** | **📂️** |
|---|---|
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg) |
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo3.mp3) |
| `Marcus_Paus_'Slava Ukraini'.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/MP3/Slava_Ukraini!.mp3`](/Music/1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini!/AudioOnly/MP3/Slava_Ukraini!.mp3) |
| `Marcus_Paus_'Slava Ukraini'.ogg` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/OGG/Slava_Ukraini!.ogg`](/Music/1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini!/AudioOnly/OGG/Slava_Ukraini!.ogg) |
| `National_anthem_of_Ukraine,_instrumental.oga.ogx` | **Location:** [`///1.1 Music (GitHub)/Part 1/Ukraine_National_Anthem/US_Navy_Band/OGX/National_anthem_of_Ukraine,_instrumental.oga.ogx`](/Music//1.1%20Music%20(GitHub)/Part%201/Ukraine_National_Anthem/US_Navy_Band/OGX/National_anthem_of_Ukraine,_instrumental.oga.ogx) |
| `Ukrainian_national_anthem_1916_(complete).ogg` | **Location:** [`///1.1 Music (GitHub)/Part 1/Ukraine_National_Anthem/Original/1916/OGG/Ukrainian_national_anthem_1916_(complete).ogg`](/Music//1.1%20Music%20(GitHub)/Part%201/Ukraine_National_Anthem/Original/1916/OGG/Ukrainian_national_anthem_1916_(complete).ogg) |

Here are the problematic lines:

```
| **🇺🇦️** | **📂️** |
|---|---|
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg) |
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo3.mp3) |
```

And here are how they render:

| **🇺🇦️** | **📂️** |
|---|---|
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/OGG/Marcus_Paus_'Slava Ukraini'_for_viola_solo.ogg) |
| `Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3` | **Location:** [`///1.1 Music (GitHub)/Part 1/Slava_Ukraini!/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo.mp3`](/Music//1.1%20Music%20(GitHub)/Part%201/Slava_Ukraini%33/AudioOnly/Viola_Solo/MP3/Marcus_Paus_'Slava Ukraini'_for_viola_solo3.mp3) |

Any tips/suggestions are welcome. I have tried various URL encoding tricks, but I can't figure out what is going wrong here.

Note: I am only accepting a solution for local links. If the fix involves placing a web like (starting with `https://`) I won't accept it.

***

**Issue version:** `1 (2022, Friday, November 4th at 6:32 pm PST)`

***
