# FC25-Big-O-Waale

Repository for Fantom Code(RVIT) Hackathon project

## GridSound(PC)

This is an open source desktop port of GridSound DAW application which provides you with a complete set of toolkits for music production, editing at avery minimal price and some basic features are available free of cost also.
The project consists of GUI for seamless user experience and consist of various plugins which give industrial effects and make your music ready for the market.
This is made in considersation with the middle class budget who can't afford a very expensive application with minimal cost for extra plugins and high end market features.

## What is a Digital Audio Workstation?

A digital audio workstation (DAW) is music production software that allows users to record audio on a personal computer. DAW software works on both the Mac and Windows operating systems. It is used for audio recording, audio editing, MIDI editing, mixing, and mastering, among other functions. DAW software powers sessions in professional recording studios and home studios alike.

## How Does a DAW Work?

A digital audio workstation functions by converting analog audio—which arrives via an external audio interface—into a digital sequence that can be processed on a computer. This audio information appears visually on a computer screen either as sonic waveforms (bars representing MIDI commands) or as music notation on a staff. You can then manipulate this sound data by interacting with it on the screen.

## 5 Functions of a Digital Audio Workstation?

### Digital audio workstations offer a wide array of functionality.

- Record and edit audio. DAWs feature audio sequencers that let users record multiple tracks and play them back simultaneously. You can then cut, copy, and paste audio waveforms much in the same way you can move text in a word processing program. Tracks can easily be muted and crossfaded into one another. At any point during the editing process, the digital files can be played back as analog 
audio through speakers or headphones.

- Play virtual instruments. Using MIDI commands, you can control virtual instruments that replicate the sounds of acoustic instruments like the piano, violin, cello, clarinet, guitar, bass, and drum sets. Musicians typically control these virtual instruments using external MIDI sequencer keyboards. Various synths—which do not replicate acoustic instruments—can also be controlled by MIDI keyboards.

- Experiment with audio effects. Digital audio workstations typically offer various effects processing features for your audio files. Effects such as delay, reverb, tremolo, compression, EQ, and echo tend to come standard on a DAW. Some producers also use third-party virtual studio technology (VST plugins) for particular effects. For instance, you might use your DAW's compressor but use a third-party plugin for reverb sounds. It’s also usually possible to set up custom automations to create volume fades, panning effects, and other forms of audio processing.

- Mix and master audio tracks. Some music producers take audio tracks recorded by someone else, import them into their DAW, and then mix those files and add final burnishing effects.
Work on sound design and non-musical audio. A digital audio workstation works for any type of audio—not just music. Some sound designers, ADR engineers, audio editors, and voiceover artists use the same DAW programs used by top music producers.

- DAWs are designed with many user interfaces, but generally, they are based on a multitrack tape recorder metaphor, making it easier for recording engineers and musicians already familiar with using tape recorders to become familiar with the new systems. Therefore, computer-based DAWs tend to have a standard layout that includes transport controls (play, rewind, record, etc.), track controls and a mixer. A waveform display is another common feature.

### Plugins:
There are countless software plugins for DAW software, each one coming with its own unique functionality, thus expanding the overall variety of sounds and manipulations that are possible. Each have their own form of generating or manipulating sound, tone, pitch, and speed of a simple sound and transform it into something different. To achieve an even more distinctive sound, multiple plugins can be used in layers, and further automated to manipulate the original sounds.

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=static%2520%2524diffObjects%28%2520a%252C%2520b%2520%29%2520%257B%250A%2509%2509let%2520empty%2520%253D%2520true%253B%250A%2509%2509const%2520diff%2520%253D%2520Object.entries%28%2520b%2520%29.reduce%28%2520%28%2520diff%252C%2520%255B%2520bk%252C%2520bv%2520%255D%2520%29%2520%253D%253E%2520%257B%250A%2509%2509%2509const%2520av%2520%253D%2520a%255B%2520bk%2520%255D%253B%250A%2509%2509%2509const%2520newval%2520%253D%2520av%2520%253D%253D%253D%2520bv%2520%253F%2520undefined%2520%253A%250A%2509%2509%2509%2509typeof%2520bv%2520%21%253D%253D%2520%2522object%2522%2520%257C%257C%2520bv%2520%253D%253D%253D%2520null%2520%253F%2520bv%2520%253A%250A%2509%2509%2509%2509typeof%2520av%2520%21%253D%253D%2520%2522object%2522%2520%257C%257C%2520av%2520%253D%253D%253D%2520null%250A%2509%2509%2509%2509%2509%253F%2520Object.freeze%28%2520JSON.parse%28%2520JSON.stringify%28%2520bv%2520%29%2520%29%2520%29%250A%2509%2509%2509%2509%2509%253A%2520GSUI.%2524diffObjects%28%2520av%252C%2520bv%2520%29%253B%250A%250A%2509%2509%2509if%2520%28%2520newval%2520%21%253D%253D%2520undefined%2520%29%2520%257B%250A%2509%2509%2509%2509empty%2520%253D%2520false%253B%250A%2509%2509%2509%2509diff%255B%2520bk%2520%255D%2520%253D%2520newval%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509return%2520diff%253B%250A%2509%2509%257D%252C%2520%257B%257D%2520%29%253B%250A%250A%2509%2509Object.keys%28%2520a%2520%29.forEach%28%2520ak%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28%2520%21%28%2520ak%2520in%2520b%2520%29%2520%29%2520%257B%250A%2509%2509%2509%2509empty%2520%253D%2520false%253B%250A%2509%2509%2509%2509diff%255B%2520ak%2520%255D%2520%253D%2520undefined%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%2520%29%253B%250A%2509%2509return%2520empty%2520%253F%2520undefined%2520%253A%2520Object.freeze%28%2520diff%2520%29%253B%250A%2509%257D

### note: This project is inspired by gridsound and is a PC port of gridsound.com (https://gridsound.com/daw/)
### all credits go to the gridsound author, Github repository: https://github.com/gridsound

# LICENSE

MIT FREE
