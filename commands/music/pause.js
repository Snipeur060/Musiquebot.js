module.exports = ({
 name: "pause",
 code: `
$onlyIf[$voiceID[$authorID]!=;Vous êtes dans aucun salon]
$description[La musique à bien été arrété ]
$footer[Thanks Snipeur060 💻снайпер060⌨#8273]
$color[#FF00FF]
 $pauseSong
 
 `
 });
