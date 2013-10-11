countdown-to-video
==================

Allows you to show a countdown timer, at the end of which a YouTube video is played (useful for events)
<<<<<<< HEAD
=======

This mini-project was made for Google Developer Group New Delhi's DevFest 2013

To solve issues related to buffering, the site first loads the YouTube Player, plays then immediately pauses it to start buffering, and then starts the countdown timer.

To use it for your event without changes, your are welcome to use my website: raveesh.co/countdown

By default, the timer is set for 10 minutes and plays this video at the end of it: http://www.youtube.com/watch?v=Dr3STRBtTp0


To customize, you can change the URL parameters. The following parameters are currently supported:
1. minutes (set countdown timer's minutes)
2. seconds (set countdown timer's seconds)
3. video (set YouTube id of video you would like to play at the end of it).
4. pause (number of seconds after which video should pause. Default is 142, for the default video. Added this to prevent the suggestions from being visible at the end. It might be off by a second or two)


Hence, on my website, you can change this to raveesh.co/countdown?minutes=1&seconds=10&video=0Bmhjf0rKe8
>>>>>>> gh-pages
