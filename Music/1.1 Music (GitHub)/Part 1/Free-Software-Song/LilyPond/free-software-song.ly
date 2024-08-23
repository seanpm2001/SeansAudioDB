 %#(ly:set-option 'old-relative)
 \version "2.10.33"  
 \header {
 tagline = ##f
 title = "The Free Software Song"
 subtitle = "Sadi moma bela loza (Bulgarian folk song)"
 composer = "Lyrics by Richard Stallman"
 style = "Bulgarian folk"
 maintainerEmail = "rms-assist@gnu.org"
 copyright = \markup { \teeny \center-column {
 "Words by Richard Stallman, the Free Software Foundation http://fsf.org/"

"Richard Stallman and the Free Software Foundation claim no
 copyright on this song."

 "The official homepage for this song is
http://www.gnu.org/music/free-software-song.html"
 "Engraving by GNU Lilypond http://lilypond.org"
} }
 }
 TimeKey = { \time 7/8 \key g \major }

 %{
 Converted to 2.10, added closing barline.
 Added some extenders and deleted one erroneous hyphen.
 -- Wilbert Berendsen <info@wilbertberendsen.nl>
 %} 

 %{
 About the following two comments: I don't know how to get this Lilypond
to insert them in the LaTeX output. I'm inserting them manually in the
titledefs file. (Somebody *please* tell me a better way.)
 -- David Madore <david.madore@ens.fr>
 %}
 
 %{
 Changed a syllabification a little, converted to 1.3.122 (feb 18, 2001)
 
 Han-Wen Nienhuys <hanwen@cs.uu.nl> 
 
 Converted to 2.4.2, fixed mistakes with alignment & spelling (dec 10, 2004)
 
 Erik Sandberg <ersa9195@student.uu.se>

 Converted to 2.10.33 and changed notes in bar 6 from cdcb to a halfnote d, a quarternote c, and a whole note b (mar 25, 2010)
 
 Jeanne Rasata <rms-assist@gnu.org>

 Deleted 2nd voice, put the key in G major, put the rhythm in 7/8, instead of 7/4, changed the song title, edited the credits, changed b4d4 in bar 4 to grace-note-b4 d2, changed b4d4 in bar 10 to grace-note-b4 d2, change a2.. in bar 10 to (a. a2) (jul 16, 2010)

 Jeanne Rasata <rms-assist@gnu.org>
 %}
 
 %{
 To the melody of "Sadi moma bela loza."
 %}

\score {
\relative c' {
  \key g \major
  \time 7/8 
 d'4 c8 b4 a4
 b4 c8 b8[( a)] g4
 g4. a4. ( b8) 
 c4. b4 \grace b8 d4  \break
 a4. a2
 d4 ( c8 b2) 
 d4 c8 b4 a4
 b4 c8 b8[( a)] g4 \break
 g4. a4. ( b8) 
 c4. b4 \grace b8 d4
 a4. a2
 a4.( a2)
 \bar "|."
}

 \addlyrics {
 Join us now and
 share the soft -- ware;
 you'll be __
 free, ha -- ckers,
 you'll be
 free. __
 Join us now and
 share the soft -- ware;
 you'll be __
 free, ha -- ckers,
 you'll be
 free. __
}

 \addlyrics {
 Hoar -- ders can get
 piles of mo -- ney;
 that is __
 true, ha -- ckers,
 that is
 true. __
 But they can -- not
 help their neigh- -- bors;
 that's not __
 good, ha -- ckers,
 that's not
 good. __
}

 \addlyrics {
 When we have e -- nough free soft -- ware 
 at our __
 call, ha -- ckers,
 at our
 call, __
 we'll kick out those
 \set ignoreMelismata = ##t % for "li -- cen -- ses"
 dir -- ty li -- cen -- ses
 \unset ignoreMelismata
 e -- ver __ more, ha -- ckers,
 e -- ver more. __
}

 \addlyrics {
 Join us now and
 share the soft -- ware;
 you'll be __
 free, ha -- ckers,
 you'll be
 free. __
 Join us now and
 share the soft -- ware;
 you'll be __
 free, ha -- ckers,
 you'll be
 free. __
}

 \layout { }
 % this is approximately the tempo rms sang the song in his legendary recording.
 \midi { }
}

%{
===========================
 tagline = \markup { "The lyrics of ``The Free Software Song'' are sung to a melody adapted from the Bulgarian folk song ``Sadi moma bela loza.'' To listen to a recording of the piece, in a more Bulgarian style, please visit
@url{http://gnu.@/org/@/music/@/FreeSWSong.@/ogg}. Richard Stallman wrote the lyrics above in 1993. This version of the score is published in *Free Software, Free Society: Selected Essays of Richard M. Stallman,* 2nd ed. (Boston: GNU Press, 2010)." "Typeset by David Madore using GNU LilyPond." }
 enteredby = "David Madore"

 VerseOne = \lyricmode {
 Join us now and
 share the so -- ftware;
 You'll be __
 free, ha -- ckers,
 you'll be
 free. __
 Join us now and
 share the so -- ftware;
 You'll be __
 free, ha -- ckers,
 you'll be
 free.
}
 
 VerseTwo = \lyricmode {
 Hoar -- ders may get
 piles of mo -- ney;
 That is __
 true, ha -- ckers,
 that is
 true. __
 But they can -- not
 help their neigh- -- bors;
 That's not __
 good, ha -- ckers,
 that's not
 good.
}
 
 VerseThree = \lyricmode {
 When we have e -- nough free so -- ftware 
 At our __
 call, ha -- ckers,
 at our
 call, __
 We'll throw out those
 \set ignoreMelismata = ##t % for "li -- cen -- ses"
 dir -- ty li -- cen -- ses.
 \unset ignoreMelismata
 E -- ver __ more, ha -- ckers,
 e -- ver more.
}
 \score {
 \new Staff \context Voice = VA <<
 \new Lyrics \lyricsto VA { \VerseOne   }
 \new Lyrics \lyricsto VA { \VerseTwo   }
 \new Lyrics \lyricsto VA { \VerseThree }

%}

