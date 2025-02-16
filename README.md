
This package is deprecated because Atom editor is no longer developed.

`Antescofo~` is a modular polyphonic Score Following system as well as a Synchronous Programming language for musical composition. The module allows for automatic recognition of music score position and tempo from a realtime audio Stream coming from performer(s), making it possible to synchronize an instrumental performance with computer realized elements. The synchronous language within Antescofo allows flexible writing of time and interaction in computer music.

- http://forumnet.ircam.fr/fr/produit/antescofo/

# Antescofo's Atom package

This package provides a `grammar core` to activate `syntax highlighting` for the `Antescofo Language` and an `OSC communication` with Antescofo. Event and Action `snippets` are now available.

- http://support.ircam.fr/docs/Antescofo/manuals/UserGuide/intro/


It is co-developed with :

- Clément Poncelet: https://github.com/cponcelets (grammar core)

- Benjamin Levy : http://benjaminnlevy.net/bnl.html#home (osc communication with antescofo)


## Install

You can install this package in your `Atom package settings` (http://flight-manual.atom.io/using-atom/sections/atom-packages).

### Atom's Theme :

This package works with the `atom-antescofo-syntax` and `atom-antescofo-light-syntax` themes available on this repo and can be easily installed in `Atom theme settings`.<br><br>
These `themes` make it easy to tweak and arrange the syntax highlighting that suits you...


<!-- # Antescofo File Recognition :

To customize Atom when loading Antescofo files , you need only manually edit your Atom config.cson file :

- Open it using the Application: Open Your Config command from the Command Palette.
- Add this to your configuration file under the *.core section:<br><br>
`under the asterisk`:<br>
&nbsp;core:<br>
&nbsp;&nbsp;customFileTypes:<br>
&nbsp;&nbsp;&nbsp;"source.antescofo": [<br>
&nbsp;&nbsp;&nbsp;"asco"<br>
&nbsp;&nbsp;&nbsp;"asco.txt"<br>
&nbsp;&nbsp;&nbsp;"score"<br>
&nbsp;&nbsp;&nbsp;"score.txt"<br>
&nbsp;&nbsp;&nbsp;]<br> -->

# Commands

It is possible now to interact with Antescofo from the editor and launch commands.

Open commands in Atom with `command-shift-P` and type `antescofo` to filter by Antescofo commands.


| key              | command                    |
| ---------------- | -------------------------- |
| `alt-cmd-l`      | antescofo:Loadantescofo    |
| `alt-cmd-enter`  | antescofo:startantescofo   |
| `alt-cmd-p`      | antescofo:oscsend          |
| `alt-cmd-n`      | antescofo:nextevent        |
| `alt-cmd-b`      | antescofo:startfromlabel   |
| `alt-cmd-s`      | antescofo:stoptantescofo   |


Some of these commands are also available if you right-click on a word and check the context menu.

### Snippets:

Event and Action snippets are now available. Type curve, pattern or nim and use the tab key ->| to echo the code and cycle through the parameters' fields.

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FnadirB%2Fatom-antescofo&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
