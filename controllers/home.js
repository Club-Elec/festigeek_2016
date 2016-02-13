var associations = [{
    name: "Club Elec",
    image: "clubelec.jpg",
    meta: "isenclub.elec@gmail.com",
    description: "Le Club Elec ISEN-Brest est un groupe de personnes voulant démocratiser et maîtriser différentes technologies (Web, Arduino, électronique, programmation, etc.). Nous organisons aussi quelques manifestations à thème au cours de l'année comme des cours sur différentes technologies ou des LAN party. Nous réalisons également des projets comme le montage d'une imprimante 3D, une borne d'arcade, un bras robotisé ou encore la création d'un forum ou d'un site."
}, {
    name: "Tonnerre de Jeux",
    image: "tonerredejeux.jpg",
    meta: "tonnerredejeux@gmail.com",
    description: "Association de joueurs de jeux de société modernes se réunissant tous les vendredis à partir de 20h30 au Foyer Laïque de Saint Marc, 12 rue du Docteur Floch, à Brest.L'association a pour but la découverte, la promotion et le développement du jeu de société qu'il soit de plateau, de cartes ou autre, lors de rencontres ludiques."
}, {
    name: "PL Guerin",
    image: "PLMG_Long.png",
    meta: "",
    description: " Le Patronage Laïque Guérin est né des combats des mouvements laïcs pour l'Éducation Populaire. Son ambition est de créer du lien social sur le quartier de Saint Martin, dans un contexte de convivialité et de tolérance. Il organise des activités de loisirs de qualité, accessibles à tous et des projets d'animation ouverts à tous."
}, {
    name: "Les conteurs du ponant",
    image: "les_conteurs_du_ponant.png",
    meta: "",
    description: ""
}, {
    name: "Yôkai no Karaoke",
    image: "yokai_logo.png",
    meta: "",
    description: "Association de karaoké musique asiatique et génériques de jeux et de dessins animés, se réunissant deux samedi après midi par mois au PL Guerin. L'association a pour but de permettre aux membres de chanter leurs chansons ou génériques favoris avec d'autres personnes ayant les mêmes passions."
}, {
    name: "Les chats cosmiques",
    image: "chatcosmique.png",
    meta: "leschatscomsiques.net",
    description: "Association d’amoureux de l’Internet et du numérique, Les Chats Cosmiques constituent une armée irrévérencieuse nourrie aux pokémons, tortues ninjas, licornes, et autres lolcats. Passerelle culturelle, linguistique et transmédia, ses objectifs sont nombreux."
}, {
    name: "ip-Paï ",
    image: "ippai_logoHD_2016.png",
    meta: "http://ippai.free.fr",
    description: "Notre Atelier ce donne pour but d'encourager ses adhérents, dans  la conception de planches en sens français dans le style Manga. De leur donner accès à la découverte des techniques d'encrage à la plume japonaise. De les conseiller pour le choix des outils de dessin et les gabarits pour les planches. Et bien sur comme toute association de loisirs créatifs, de créer aussi du lien social. C'est avant tout un atelier d'échange pour partager différents avis et faire des suggestions constructives, pour aider tout un chacun à améliorer sans cesse ses créations. Montrez-leur, dite-leur, faite-les faire. Et félicitez-les de leurs efforts, sinon ils passeront tout le samedi après midi à glander en papotant. Telle pourrait-être la maxime de l'Atelier Manga de l'Association Ip-Paï :) !"
}, {
    name: "Pégase",
    image: "pegasus_logofestigeek.png",
    meta: "http://pegase.alsr.fr",
    description: ""
}, {
    name: "guard impact",
    image: "Guard-Impact.png",
    meta: "http://guardimpact.fr",
    description: "Guard Impact est une association d’événementiel et d’organisation de tournois de Versus Fighting. Créé en février 2015,  Guard Impact a pour but de promouvoir les jeux vidéo de bagarre autour d’activités hebdomadaires, mensuelles et annuelles. Poussés par la motivation des joueurs de la région, nous avons souhaité officialiser les choses et créer une association afin d’encadrer nos événements. En devenant une association Guard Impact est aujourd’hui à même de proposer aux joueurs bretons un programme varié."
}, {
    name: "libido",
    image: "",
    meta: "",
    description: ""
}, {
    name: "Karuta",
    image: "",
    meta: "",
    description: ""
}, {
    name: "Tonerre de brique",
    image: "",
    meta: "",
    description: ""
}, {
    name: "Laurent (cartes magic)",
    image: "",
    meta: "",
    description: ""
}, {
    name: "Arnaud",
    image: "",
    meta: "",
    description: ""
}, {
    name: "Sullyvan",
    image: "",
    meta: "",
    description: ""
}, {
    name: "ville de Brest",
    image: "brest.png",
    meta: "www.brest.fr",
    description: ""
}];

var menu = [{
    name: "FestiGeek",
    icon: "help",
    href: "festigeek"
}, {
    name: "Associations",
    icon: "users",
    href: "associations"
}, {
    name: "Programme",
    icon: "calendar",
    href: "programme"
}, {
    name: "Accès",
    icon: "map",
    href: "acces"
}, {
    name: "Ateliers",
    icon: "smile",
    href: "ateliers"
}, {
    name: "Contact",
    icon: "user",
    href: "contact"
}];

app.controller( "home", ["$scope", "$location", "$anchorScroll", function( $scope, $location, $anchorScroll ) {
    $scope.goToId = function( id ) {
        $location.hash( id );
        $anchorScroll();
    };

    $scope.associations = associations;
    $scope.menu         = menu;
}]);
