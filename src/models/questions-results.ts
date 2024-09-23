
//All questions
export const QUESTIONS: string[] = [
  "Vous dégagez une énergie d’enfant, de la joie de vivre et de l’optimisme. Vous faites de nombreux gestes quand vous parlez.",
  "Vous êtes communicatif et ne cachez pas vos sentiments. Lors d’une discussion animée, vous n’hésitez pas à attraper ou toucher le bras de votre interlocuteur",
  "Vous avez un don de conteur et les gens vous écoutent volontiers. Vous êtes une source d’inspiration pour les autres et vous les faites rire.",
  "Vous arrivez facilement à convaincre les autres par votre charme et vos plaisanteries, même sans arguments factuels",
  "Dans les débats, vous avez plutôt tendance à parler qu’à écouter. Ce que vous dites est si important pour vous qu’il vous arrive parfois d’interrompre votre interlocuteur.",
  "Le ton de votre voix peut passer d’enjoué à désolé d’une seconde à l’autre",
  "Vous vous déconcentrez facilement et vous cédez rapidement à l’ennui, l’impatience et la précipitation. Vous avez des difficultés à mettre en place ou à maintenir une routine ou un rythme, alors que justement cela vous ferait du bien.",
  "Vous voulez être aimé et vous avez besoin de réconfort et d’adhésion. Pour être apprécié, vous êtes prêt à tout faire et à laisser passer beaucoup de choses.",
  "Vous préférez concevoir un plan puis l’appliquer. La conception et la planification sont pour vous plus importantes que la mise en œuvre.",
  "Vous êtes méthodique, organisé et ordonné. Vous aimez travailler sur les détails. Les domaines dans lesquels vous pourriez vous sentir à l’aise : les mathématiques, la recherche, le contrôle des coûts, l’artisanat, le graphisme.",
  "Vous reconnaissez vite les sentiments et besoins des autres personnes. Vous ressentez vos propres sentiments et ceux des autres. Vous êtes fidèle, loyal et passionné.",
  "Vous avez une personnalité intense, ample. Vous aimez l’introspection ou la discussion approfondie en tête à tête. Vous n’aimez pas les causeries superficielles.",
  "Il est difficile d’obtenir votre pardon. Vous êtes rancunier",
  "Vous essayez de voir le bon côté des choses et de rester positif, mais vous découvrez facilement des erreurs ou des risques dans les projets et les situations.",
  "Vous vous isolez fréquemment et vous avez souvent besoin de passer du temps seul. Vous vous suffisez à vous-même.",
  "Vous oubliez peu de choses. Vous vous sentez blessé lorsque les autres vous portent peu d’affection ou d’attention",
  "« Je trouve aussi » est une phrase que vous prononcez facilement. Vous avez rarement besoin de vous affirmer ou d’affirmer votre opinion. Vous êtes adaptable.",
  "Vous faites preuve de tact, de sensibilité et de politesse dans vos relations avec les autres.",
  "Vous êtes pondéré, détendu, impassible. Les retards ou l’effervescence n’ont pas de prise sur vous. Vous êtes patient, calme et tolérant.",
  "Vous avez un humour sec, qui s’exprime à travers des commentaires sarcastiques ou moqueurs, dans lesquels votre côté farceur transparaît.",
  "Vous avez des difficultés à prendre des décisions.",
  "Vous êtes paisible et vous vous laissez rarement emballer. Vous mesurez l’activité à l’aide de l’équation suivante : le profit divisé par l’effort.",
  "Vous êtes souvent incertain, vous vous faites du souci, vous ressassez vos problèmes en secret.",
  "Vous n’aimez pas gérer les conflits. Vous refoulez en vous la colère et les déceptions.",
  "Vous adorez les défis. Ils sont pour vous l’occasion de montrer ce dont vous êtes capable. Vous faites de toute situation une compétition.",
  "Vous êtes déterminé et votre voix compte. Les gens y réfléchissent à deux fois avant de vous contredire",
  "Vous vous sentez indépendant du jugement d’autrui, vous avez confiance en vos capacités.",
  "Vous aimez prendre des décisions. Vous réagissez rapidement et efficacement dans presque toutes les situations.",
  "Vous êtes impatient à l’égard des autres. Vous avez une tendance aux réactions précipitées, irritées et vigoureuses. Vous avez du mal à supporter les autres points de vue ou les autres manières de travailler.",
  "Vous ne montrez pas facilement vos sentiments ou votre affection.",
  "Votre ténacité peut se muer en entêtement.",
  "Vous avez tendance à trop travailler. Vous vous sentez mal ou même bon à rien lorsque vous ne pouvez pas constamment entreprendre quelque chose."
];

//Result of each temperament
export const RESULTS = [
  {
    toContinue: "Enthousiaste, sociable, optimiste. Excellente capacité à motiver les autres et à créer une ambiance positive.",
    toUpgrade: "Peut êre impulsif et avoir du mal à se concentrer sur une tâche. Tendance à dispercer ses efforts.",
    picture: '../src/assets/pictures/emotions_20240812220957.png'
  },
  {
    toContinue: "Analytique, créatif, perfectionniste. Excellente capacité à résoudre des problèmes complexes et à apporter de nouvelles idées.",
    toUpgrade: "Peut être trop critique envers soi-même et les autres. Tendance à la rumination et à la pessimisme.",
    picture: '../src/assets/pictures/emotions_20240812221012.png'
  },
  {
    toContinue: "Calme, patient, diplomate. Excellente capacité à gérer le stress et à prendre des décisions réfléchies.",
    toUpgrade: "Manque parfois d'initiative et peut sembler indifférent. Tendance à la procrastination.",
    picture: '../src/assets/pictures/emotions_20240812221003.png'
  },
  {
    toContinue: "Déterminé, ambitieux, leader né. Excellente capacité à atteindre ses objectifs et à prendre des décisions rapides.",
    toUpgrade: "Peut être impatient et autoritaire. Tendance à s'emporter facilement.",
    picture: '../src/assets/pictures/emotions_20240812220948.png'
  }
];

  //All Temperaments
export const DESCRIPTIONS: string[] = [
  "La personne sanguine est passionnée, elle est positive et croque la vie à pleines dents! Elle se fait beaucoup d'amis car elle est sincère, chaleureuse et conviviale. Elle parle à tout le monde et peut-être même trop car elle s'emballe vite. Par ailleurs, elle peut sembler agitée, trop vive dans ses réactions et ses paroles. Voulant profiter de la vie, elle papillonne dans tous les sens, sans soucis ; elle dépense son argent sans compter et partage avec les autres.",
  "La personne mélancolique a un sens élevé du discernement ; elle comprend vite et bien les gens qui l'entourent. Fidèle et dévouée, elle se sacrifie pour les autres et les aime sincèrement et tendrement. Elle est attentive et sensible à leurs besoins tout en se montrant discrète. Elle aime ce qui est beau, elle a du goût, de la créativité et de l'imagination. Elle est sensible à l'art aussi bien qu’à la musique, le dessin ou l'écriture… Elle est rêveuse et contemplative mais à force de trop cogiter, elle peut sombrer dans la morosité et la nostalgie.",
  "La personne flegmatique est calme et paisible, elle garde son sang froid en toutes occasions et a le sens des responsabilités. Elle est sérieuse, raisonnable ; on peut compter sur elle car elle est besogneuse. Pourtant, elle peut sembler molle et endormie, paresseuse. On doit donc la pousser et l'encourager pour qu'elle aille de l'avant et prenne des décisions. Bien que la peur la paralyse souvent, elle sait aussi se montrer taquine et moqueuse.",
  "La personne colérique a énormément de volonté ; quand elle est décidée, rien ne l'arrête. Elle agit seule, se débrouille, a de l'énergie à revendre, ne tient pas en place…  Elle n'a peur de rien et ne se décourage pas facilement. Elle se démarque comme « leader », peut paraître autoritaire, sévère et dure. Pour arriver à ses buts, elle est capable de marcher sur les autres, sans aucune pitié, d’user de ruse et de méchanceté. Si quelqu'un barre sa route, elle peut entrer dans une colère folle car elle a peu de patience et préfère agir seule que d'attendre les autres."
];