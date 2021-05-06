module.exports = ({
    name: "play",
    code: `$onlyIf[$voiceID[$authorID]!=;Vous êtes dans aucun salon]

$description[Votre musique $message à bien été ajouté $playSong[$message;1m;yes;yes;Une erreur à été détecté]]
$footer[Thanks 💻снайпер060⌨#8273]
$color[#FF00FF]
`
});
