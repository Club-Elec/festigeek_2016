var associations = [{
    name: "Club Elec",
    image: "no-image.png",
    meta: "isenclub.elec@gmail.com",
    description: "Le Club Elec ISEN-Brest est un groupe de personnes voulant démocratiser et maîtriser différentes technologies (Web, Arduino, électronique, programmation, etc.). Nous organisons aussi quelques manifestations à thème au cours de l'année comme des cours sur différentes technologies ou des LAN party. Nous réalisons également des projets comme le montage d'une imprimante 3D, une borne d'arcade, un bras robotisé ou encore la création d'un forum ou d'un site."
}, {
    name: "Tonnerre de Jeux",
    image: "no-image.png",
    meta: "tonnerredejeux@gmail.com",
    description: "Association de joueurs de jeux de société modernes se réunissant tous les vendredis à partir de 20h30 au Foyer Laïque de Saint Marc, 12 rue du Docteur Floch, à Brest.L'association a pour but la découverte, la promotion et le développement du jeu de société qu'il soit de plateau, de cartes ou autre, lors de rencontres ludiques."
}, {
    name: "PL Guerin",
    image: "no-image.png",
    meta: "",
    description: " Le Patronage Laïque Guérin est né des combats des mouvements laïcs pour l'Éducation Populaire. Son ambition est de créer du lien social sur le quartier de Saint Martin, dans un contexte de convivialité et de tolérance. Il organise des activités de loisirs de qualité, accessibles à tous et des projets d'animation ouverts à tous."
}, {
    name: "Les conteurs du ponant",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "Yôkai no Karaoke",
    image: "no-image.png",
    meta: "",
    description: "Association de karaoké musique asiatique et génériques de jeux et de dessins animés, se réunissant deux samedi après midi par mois au PL Guerin. L'association a pour but de permettre aux membres de chanter leurs chansons ou génériques favoris avec d'autres personnes ayant les mêmes passions."
}, {
    name: "Les chats cosmiques",
    image: "no-image.png",
    meta: "leschatscomsiques.net",
    description: "Association d’amoureux de l’Internet et du numérique, Les Chats Cosmiques constituent une armée irrévérencieuse nourrie aux pokémons, tortues ninjas, licornes, et autres lolcats. Passerelle culturelle, linguistique et transmédia, ses objectifs sont nombreux :<br />- Promotion des cultures numériques<br />- Vulgarisation d’outils libristes mais néanmoins techniques<br />- Démocratisation des philosophies libristes, hacktivistes<br />- Collaboration et partage de ressources et connaissances"
}, {
    name: "Assoss' Soja",
    image: "no-image.png",
    meta: "",
    description: "L'assoss' Soja est une communauté de passionée du Japon en tous genre. Elle organise régulièrement des évènements afin d'exprimer leur émois commun pour le steampunk, cosplay, lolita, roleplay et autres folies vestimentaires."
}, {
    name: "Darkangels",
    image: "no-image.png",
    meta: "darkangels.asso.st",
    description: "Association Darkangels a été créé en 2007, elle a pour but la réalisation de métrage et de séries web. Elle a déjà à son actif plusieurs créations comme Moko les maîtres de l'équilibre, L'apocalypse est pour bientôt ou bien encore administration mortelle etc."
}, {
    name: "Ville de Brest",
    image: "no-image.png",
    meta: "www.brest.fr",
    description: ""
}];

app.controller( "home", ["$scope", "$location", "$anchorScroll", function( $scope, $location, $anchorScroll ) {
    $scope.goToId = function( id ) {
        $location.hash( id );
        $anchorScroll();
    };

    $scope.associations = associations;
}]);
