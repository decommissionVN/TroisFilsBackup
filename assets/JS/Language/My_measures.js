language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Centimeter: "Centimètres",
            Inches: "Pouces",
            Modify_Gender_btn : "Modifier mon choix - Lady ou Gentlemen",
            Gender_choice : "Êtes-vous un Homme ou une femme?",
            Gender_modify : "Modifiez votre choix - Lady ou Gentlemen",
            Title_not_taken : "Il est temps de prendre vos mesures!",
            Subtitle_not_taken : "Nos tailleurs vous ont préparé ce formulaire pour vous accompagner au cours de votre séance de mesure. Suivez les étapes et n'hésitez pas à nous contacter pour toute question!",
            Title_taken : "Vous avez correctement pris vos mesures!",
            Subtitle_taken : "Vous pouvez modifier vos mesures à tout moment, et nos tailleurs restent à votre disposition pour toute question!",
            Title_page : "Trois Fils | Vous measures",
            Title_dashboard : "Votre espace tailleur",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            which_units_use : "Quelle unité souhaitez vous utiliser?",
            Orders : "Mes commandes",
            Contact : "contacter mon tailleur",
            About_footer : "Créé pour devenir une solution de poids dans l'art de l'habillement sur mesure, notre travail vous permet aujourd'hui de profiter d'un service d'exception. Situé sur les rives de la Seine, à Puteaux, notre siège social est au coeur de notre activité de création. Nos tailleurs sont disponibles pour vous assister à tout instant. Ce service reconnu est une marque de fabrique dont nous sommes fiers.",
            Units_label : "Préparez vous à prendre vos mesures!",
            How_to_do : "Suivez notre tutorial pour prendre vos mesures et initer la création de votre pièce sur mesure. Nos tailleurs restent à votre disposition pour toute question à propos de la prise de mesure ou de la conception de votre pièce!",
            measure1_label : "Poitrine",
            measure2_label : "Ventre",
            measure3_label : "Hanches",
            measure4_label : "Largeur d'épaules",
            measure5_label : "Manches",
            measure6_label : "Largeur de face",
            measure7_label : "Largeur de dos",
            measure8_label : "Longueur",
            measure9_label : "Tour de taille",
            measure10_label : "Hanches libres",
            measure11_label : "L'entre-jambes",
            measure12_label : "Cuisses",
            measure13_label : "Mollets",
            measure14_label : "Longueur de jambes",
            measure15_label : "Tour de cou",
            Not_connected : "Vous n'êtes pas connectés. Veuillez vous connecter pour accéder à votre espace",
            More : "En savoir plus",
            Social_media : "Réseaux sociaux",
            Quick_links : "Liens Rapides",
            Navigate_easily : "Navigation",
            Homepage : "Accueil",
            About : "A propos",
            All_products : "Nos pièces",
            Ladies : "Femmes",
            Gentlemen : "Hommes",
            Wedding : "Mariage",
            Blog : "Blog",
            Appointments : "Rendez-vous",
            Excellence : "Nos tailleurs",
            Around_globe : "A l'international",
            CGU : "Conditions d'utilisation",
            PPolicy : "Politique de confidentialité",
            Copyright : " | Copyright 2020 - VN",
            About_tailoring : "A propos de Couture",
            How_to_take : "Quelques conseils de votre tailleur",
            Measure : "Measure test fr",
            Home : "Accueil",
            About : "A propos",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Login : "Connexion",
            Signup : "Inscription",
            Dashboard : "Mon espace",
            Signout : "Déconnexion",
            Welcome_Login : "Bienvenue sur votre espace!",
            Email : "Email",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
           
        } 
        User_already_measured(translation);
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Centimeter: "Centimeters",
            which_units_use : "Which unit do you whish to use?",
            Inches: "Inches",
            How_to_do : "Follow step by step our tutorial in order to initiate the creation of your tailored piece. Our tailors remain at your disposal for any question about the measures or the tailoring process!",
            Modify_Gender_btn : "Edit my choice - Lady or Gentlemen",
            Gender_choice : "Are you a Lady or a Gentlemen?",
            Gender_modify : "Edit your choice - Lady or Gentlemen",
            Title_not_taken : "It's time to take your measures!",
            Subtitle_not_taken : "In order to ease the measurment process, our tailors designed the following form. Follow-up the steps and create your own custom piece.",
            Title_taken : "You already took your measures!",
            Subtitle_taken : "You can of course modify your measures anytime, and our tailors remain at your disposal for any question.",
            Title_page : "Trois Fils | Your measures",
            Title_dashboard : "Your tailoring dashboard",
            Profile : "My profile",
            Measures : "My measures",
            Orders : "My orders",
            Contact : "Contact my tailor",
            About_footer : "Created to become a reliable solution for the tailoring industry, our dedicacy ensure you the best service for your tailoring needs. Located in Puteaux, France, the headquarters of Trois fils have represent the central place of our activity.",
            Units_label : "Get ready to take your measures",
            measure1_label : "Chest",
            measure2_label : "Stomach",
            measure3_label : "Hips",
            measure4_label : "Full shoulder",
            measure5_label : "Sleeves",
            measure6_label : "Front",
            measure7_label : "Back",
            measure8_label : "Length",
            measure9_label : "Waist",
            measure10_label : "Hips free",
            measure11_label : "Crotch",
            measure12_label : "Tight",
            measure13_label : "Cuff",
            measure14_label : "Leg's length",
            measure15_label : "Neck",
            Not_connected : "You are not connected yet. Please login to access your dashboard",
            More : "About TroisFils",
            Social_media : "Social media",
            Quick_links : "Quck links",
            Navigate_easily : "Navigate easily",
            Homepage : "TroisFils | Home",
            About : "Abous us",
            All_products : "Tailored pieces",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Wedding : "Wedding",
            Blog : "Blog",
            Appointments : "Appointments",
            Excellence : "Excellence & Tailoring",
            Around_globe : "International",
            CGU : "General Conditions of use",
            PPolicy : "Privacy Policy",
            Copyright : " | Copyright 2020 - VN",
            About_tailoring : "About Tailoring",
            How_to_take : "Some advices from your tailor",
            Measure : "measure test en",
            Home : "Home",
            About : "About us",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Login : "Login",
            Signup : "Signup",
            Dashboard : "Dashboard",
            Signout : "Signout",
            Welcome_Login : "Welcome to your account portail",
            Email : "Email",
            Password : "Password",
            Continue_without : "Continue without session",
        }
        display_footer(translation);
        User_already_measured(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    if (token && userId ) {
    document.getElementById('title_page_measures').innerHTML = translation.Title_page;
    document.getElementById('title_dashboard').innerHTML = translation.Title_dashboard;
    document.getElementById('contact_tailor').innerHTML = translation.Contact;
    document.getElementById('orders').innerHTML = translation.Orders;
    document.getElementById('measures').innerHTML = translation.Measures;
    document.getElementById('profile').innerHTML = translation.Profile;
    document.getElementById('units_label').innerHTML = translation.Units_label;
    document.getElementById('measure1_label').innerHTML = translation.measure1_label;
    document.getElementById('measure2_label').innerHTML = translation.measure2_label;
    document.getElementById('measure3_label').innerHTML = translation.measure3_label;
    document.getElementById('measure4_label').innerHTML = translation.measure4_label;
    document.getElementById('measure5_label').innerHTML = translation.measure5_label;
    document.getElementById('measure6_label').innerHTML = translation.measure6_label;
    document.getElementById('measure7_label').innerHTML = translation.measure7_label;
    document.getElementById('measure8_label').innerHTML = translation.measure8_label;
    document.getElementById('measure9_label').innerHTML = translation.measure9_label;
    document.getElementById('measure10_label').innerHTML = translation.measure10_label;
    document.getElementById('measure11_label').innerHTML = translation.measure11_label;
    document.getElementById('measure12_label').innerHTML = translation.measure12_label;
    document.getElementById('measure13_label').innerHTML = translation.measure13_label;
    document.getElementById('measure14_label').innerHTML = translation.measure14_label;
    document.getElementById('measure15_label').innerHTML = translation.measure15_label;
    } else {
        console.log('You are not connected');
    }
}

