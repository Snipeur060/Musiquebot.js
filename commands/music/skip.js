module.exports = ({
    name: "skip",
    code: `$onlyIf[$voiceID[$authorID]!=;Vous êtes dans aucun salon]
$skipSong
$color[#FF00FF]
    $description[Musique skip]
$footer[💻снайпер060#8273]`
});
