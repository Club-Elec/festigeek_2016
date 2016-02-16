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
    description: "Yôkai no Karaoke est une association loi 1901 ayant pour but de permettre à des fans de chanter leurs génériques de dessins animés préférés ou les chansons de leur groupes asiatiques préférés en karaoké. Elle est basée à Brest et les rendez-vous se font au PL Guerin tous les samedis après-midi de 14h à 18h sauf contre ordre."
}, {
    name: "Les chats cosmiques",
    image: "chatcosmique.png",
    meta: "leschatscomsiques.net",
    description: "Association d’amoureux de l’Internet et du numérique, Les Chats Cosmiques constituent une armée irrévérencieuse nourrie aux pokémons, tortues ninjas, licornes, et autres lolcats. Passerelle culturelle, linguistique et transmédia, ses objectifs sont nombreux."
}, {
    name: "ip-Paï ",
    image: "ippai_logoHD_2016.png",
    meta: "http://ippai.free.fr",
    description: "Notre Atelier se donne pour but d'encourager ses adhérents, dans  la conception de planches en sens français dans le style Manga. De leur donner accès à la découverte des techniques d'encrage à la plume japonaise. De les conseiller pour le choix des outils de dessin et les gabarits pour les planches. Et bien sur comme toute association de loisirs créatifs, de créer aussi du lien social. C'est avant tout un atelier d'échange pour partager différents avis et faire des suggestions constructives, pour aider tout un chacun à améliorer sans cesse ses créations. Montrez-leur, dites-leur, faites-les faire. Et félicitez-les de leurs efforts, sinon ils passeront tout le samedi après midi à glander en papotant. Telle pourrait-être la maxime de l'Atelier Manga de l'Association Ip-Paï :) !"
}, {
    name: "Pégase",
    image: "pegasus_logofestigeek.png",
    meta: "http://pegase.alsr.fr",
    description: "PEGASE section Astronomie et Espace de l’Amicale Laïque de Saint-Renan. Nous avons dans l’enceinte du collège de Kerzouar à Saint-Renan un observatoire qui abrite deux télescopes de 350 et 400 mm ainsi que du matériel spécialisé pour l’observation du Soleil. Des soirées d’observation public sont organisées un vendredi par mois. En juillet et août l’observatoire est ouvert tous les mardis soir. En août nous participons aux Nuits des Etoiles. Nous intervenons dans les écoles, les centres aérés et les colonies de vacances  pour des animations astro ou microfusées."
}, {
    name: "guard impact",
    image: "Guard-Impact.png",
    meta: "http://guardimpact.fr",
    description: "Guard Impact est une association d’événementiel et d’organisation de tournois de Versus Fighting. Créé en février 2015,  Guard Impact a pour but de promouvoir les jeux vidéo de bagarre autour d’activités hebdomadaires, mensuelles et annuelles. Poussés par la motivation des joueurs de la région, nous avons souhaité officialiser les choses et créer une association afin d’encadrer nos événements. En devenant une association Guard Impact est aujourd’hui à même de proposer aux joueurs bretons un programme varié."
}, {
    name: "libido",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "Karuta",
    image: "logo_karuta_france.jpg",
    meta: "facebook.com/groups/karuta.brest",
    description: "Le karuta est un jeu de cartes traditionnel japonais basé sur un recueil de poèmes anciens. C’est un jeu qui allie à la fois mémorisation, réflexes et sens tactique. Considéré comme un sport au Japon, il commence à se développer un peu partout en Europe et notamment en France. L’association Karuta Bretagne vous propose des initiations et des démonstrations autour de ce jeu qui ne nécessite aucune connaissance du japonais et s’adresse au plus grand nombre. Vous pouvez également nous retrouver tous les samedis après-midi sur Brest pour des entraînements."
}, {
    name: "Laurent (cartes magic)",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "Arnaud",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "Sullyvan",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "ville de Brest",
    image: "brest.png",
    meta: "www.brest.fr",
    description: ""
}];

var commerces = [{
    name: "Excalibulle",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "Escale à manga",
    image: "no-image.png",
    meta: "",
    description: ""
}, {
    name: "Croc Jeu",
    image: "no-image.png",
    meta: "",
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
    $scope.commerces = commerces;
    $scope.menu         = menu;
}]);
