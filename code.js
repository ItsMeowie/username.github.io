var options = [
    'Sonic was originally going to be named Mr. Needle-mouse.',
    'Sonic was originally going to have a blonde human girlfriend named Madonna.',
    'Sonic was originally going to be a blue bunny with a red bow tie.',
    'The Archie Sonic comic series is the worlds longest-running comic series based on a video game.',
    'Sonics shoes were inspired by Santa Claus and Michael Jackson.',
    'He cant swim because his creators also mistakenly believed real-life hedgehogs cant swim, when they actually can.',
    'Sonic was blue to match Segas logo color.',
    'Sonic was originally going to be a rabbit who could throw carrots at enemies.',
    'Dr Robotnik had a different name in Japan, where he was called Dr. Eggman.',
];

function Fact() {

    var randomOption = Math.floor(Math.random() * options.length);

    document.getElementById('fact').innerHTML = '';
    document.getElementById('fact').innerHTML = options[randomOption];
}