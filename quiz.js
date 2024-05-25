const quiz = [
    {
        article: 1,
        question: "Quelle est la nature du régime politique du Maroc selon l'article 1 ?",
        options: [
            "Monarchie absolue",
            "République parlementaire",
            "Monarchie constitutionnelle, démocratique, parlementaire et sociale",
            "Dictature militaire"
        ],
        answer: 2
    },
    {
        article: 2,
        question: "Comment la souveraineté est-elle exercée au Maroc selon l'article 2 ?",
        options: [
            "Uniquement par voie de référendum",
            "Directement par voie de référendum et indirectement par les représentants élus",
            "Par le Roi uniquement",
            "Par les partis politiques"
        ],
        answer: 1
    },
    {
        article: 3,
        question: "Quelle est la religion de l'État marocain selon l'article 3 ?",
        options: [
            "Christianisme",
            "Judaïsme",
            "Islam",
            "Bouddhisme"
        ],
        answer: 2
    },
    {
        article: 4,
        question: "Quel est l'emblème du Royaume du Maroc selon l'article 4 ?",
        options: [
            "Un drapeau rouge avec une étoile verte à cinq branches",
            "Un drapeau vert avec une étoile rouge",
            "Un drapeau rouge avec un croissant blanc",
            "Un drapeau vert avec une étoile blanche"
        ],
        answer: 0
    },
    {
        article: 5,
        question: "Quelles langues sont reconnues comme officielles par l'article 5 ?",
        options: [
            "Arabe et Français",
            "Amazighe et Français",
            "Arabe et Amazighe",
            "Français et Anglais"
        ],
        answer: 0
    },
    {
        article: 6,
        question: "Quelle est la nature de la loi selon l'article 6 ?",
        options: [
            "L'expression de la volonté du Roi",
            "L'expression suprême de la volonté de la nation",
            "L'expression de la volonté des partis politiques",
            "L'expression de la volonté du Parlement"
        ],
        answer: 1
    },
    {
        article: 7,
        question: "Quel est le rôle des partis politiques selon l'article 7 ?",
        options: [
            "Encadrer et former politiquement les citoyennes et citoyens",
            "Organiser les élections",
            "Gouverner sans opposition",
            "Contrôler les médias"
        ],
        answer: 0
    },
    {
        article: 8,
        question: "Que doivent promouvoir les pouvoirs publics selon l'article 8 ?",
        options: [
            "La négociation collective",
            "La dissolution des syndicats",
            "La suppression des chambres professionnelles",
            "La non-participation des employeurs"
        ],
        answer: 0
    },
    {
        article: 9,
        question: "Par qui les partis politiques et les organisations syndicales peuvent-ils être suspendus ou dissous selon l'article 9 ?",
        options: [
            "Par une décision du Roi",
            "Par les pouvoirs publics",
            "Par une décision de justice",
            "Par un référendum"
        ],
        answer: 1
    },
    {
        article: 10,
        question: "Quels droits sont garantis à l'opposition parlementaire selon l'article 10 ?",
        options: [
            "Avoir plus de pouvoir que le gouvernement",
            "La liberté d'opinion, d'expression et de réunion",
            "Contrôler les médias",
            "Dissoudre le Parlement"
        ],
        answer: 1
    },
    {
        article: 11,
        question: "Qu'est-ce qui constitue le fondement de la légitimité de la représentation démocratique selon l'article 11 ?",
        options: [
            "Les élections libres, sincères et transparentes",
            "La nomination par le Roi",
            "Le choix des partis politiques",
            "La sélection par tirage au sort"
        ],
        answer: 0
    },
    {
        article: 12,
        question: "Comment les associations de la société civile et les organisations non gouvernementales peuvent-elles exercer leurs activités selon l'article 12 ?",
        options: [
            "En toute liberté, sans respect de la loi",
            "En toute liberté, dans le respect de la Constitution et de la loi",
            "Avec l'autorisation du gouvernement",
            "En collaboration avec les partis politiques"
        ],
        answer: 1
    },
    {
        article: 13,
        question: "Que doivent créer les pouvoirs publics selon l'article 13 ?",
        options: [
            "Des instances de concertation",
            "Des instances de contrôle",
            "Des nouvelles régions",
            "Des lois organiques"
        ],
        answer: 0
    },
    {
        article: 14,
        question: "Quel droit est accordé aux citoyennes et citoyens selon l'article 14 ?",
        options: [
            "Le droit de présenter des propositions en matière législative",
            "Le droit de voter uniquement",
            "Le droit de grève",
            "Le droit de manifestation"
        ],
        answer: 0
    },
    {
        article: 15,
        question: "Quel droit est accordé aux citoyennes et citoyens selon l'article 15 ?",
        options: [
            "Le droit de présenter des pétitions aux pouvoirs publics",
            "Le droit de se présenter aux élections",
            "Le droit de créer des partis politiques",
            "Le droit d'être jugé par leurs pairs"
        ],
        answer: 0
    },
    {
        article: 16,
        question: "Quel est l'objectif du Royaume du Maroc envers ses citoyens résidant à l'étranger selon l'article 16 ?",
        options: [
            "Les faire revenir au Maroc",
            "Assurer leur protection des droits et des intérêts légitimes",
            "Les éloigner de la politique nationale",
            "Limiter leur influence"
        ],
        answer: 1
    },
    {
        article: 17,
        question: "Quels droits de citoyenneté sont garantis aux Marocains résidant à l'étranger selon l'article 17 ?",
      options: [
      "Aucun droit",
      "Le droit d'être électeurs et éligibles",
      "Le droit de vote uniquement",
      "Le droit de résidence"
      ],
      answer: 1
      },
      {
      article: 18,
      question: "Que doivent assurer les pouvoirs publics aux Marocains résidant à l'étranger selon l'article 18 ?",
      options: [
      "Une participation limitée",
      "Une participation aussi étendue que possible aux institutions consultatives et de bonne gouvernance",
      "Aucun droit de participation",
      "Une exclusion totale des affaires publiques"
      ],
      answer: 1
      },
      {
      article: 19,
      question: "Quels droits et libertés sont garantis à l'homme et à la femme selon l'article 19 ?",
      options: [
      "Des droits et libertés inégaux",
      "Des droits et libertés à caractère civil, politique, économique, social, culturel et environnemental, à égalité",
      "Des droits limités aux hommes",
      "Des droits limités aux femmes"
      ],
      answer: 1
      },
      {
      article: 20,
      question: "Que garantit l'article 20 de la Constitution marocaine de 2011 ?",
      options: [
      "Le droit de vote",
      "Le droit à la vie",
      "Le droit de propriété",
      "Le droit de grève"
      ],
      answer: 1
      },
      {
      article: 21,
      question: "Que garantit l'article 21 en matière de sécurité ?",
      options: [
      "Le droit de porter des armes",
      "Le droit à la sécurité pour tous les citoyens",
      "Le droit à la sécurité uniquement pour les étrangers",
      "Le droit à l'insécurité"
      ],
      answer: 1
      },
      {
      article: 22,
      question: "Que prohibe l'article 22 ?",
      options: [
      "La torture, les traitements cruels, inhumains ou dégradants",
      "La liberté d'expression",
      "La liberté de religion",
      "Le droit de vote"
      ],
      answer: 0
      },
      {
      article: 23,
      question: "Quel est le droit protégé par l'article 23 ?",
      options: [
      "Le droit à un procès équitable",
      "Le droit de ne pas être arrêté, détenu, exilé ou emprisonné de manière arbitraire",
      "Le droit à la santé",
      "Le droit à l'éducation"
      ],
      answer: 1
      },
      {
      article: 24,
      question: "Quel droit fondamental est garanti par l'article 24 ?",
      options: [
      "Le droit à la liberté de pensée, d'opinion et d'expression",
      "Le droit à la propriété privée",
      "Le droit au travail",
      "Le droit à la sécurité sociale"
      ],
      answer: 0
      },
      {
      article: 25,
      question: "Quel droit est protégé par l'article 25 ?",
      options: [
      "Le droit à la liberté de la presse",
      "Le droit à l'enseignement supérieur",
      "Le droit à un logement",
      "Le droit à la santé"
      ],
      answer: 3
      },
      {
      article: 26,
      question: "Que garantit l'article 26 en matière de culture ?",
      options: [
      "La liberté de création culturelle et artistique",
      "La liberté de la presse",
      "Le droit au logement",
      "Le droit au travail"
      ],
      answer: 0
      },
      {
      article: 27,
      question: "Quel droit est protégé par l'article 27 ?",
      options: [
      "Le droit d'accès à l'information détenue par l'administration publique",
      "Le droit à la propriété privée",
      "Le droit à un procès équitable",
      "Le droit à la sécurité sociale"
      ],
      answer: 0
      },
      {
      article: 28,
      question: "Que garantit l'article 28 en matière de liberté de la presse ?",
      options: [
      "La censure totale des médias",
      "La liberté de la presse",
      "La liberté de créer des partis politiques",
      "La liberté de religion"
      ],
      answer: 1
      },
      {
      article: 29,
      question: "Quels droits sont protégés par l'article 29 ?",
      options: [
      "La liberté de réunion, de rassemblement pacifique, de manifestation, d'association et d'adhésion syndicale et politique",
      "La liberté de la presse",
      "Le droit à un procès équitable",
      "Le droit à l'éducation"
      ],
      answer: 0
      },
      {
      article: 30,
      question: "Quels droits sont garantis aux citoyens marocains selon l'article 30 ?",
      options: [
      "Le droit de vote et d'éligibilité",
      "Le droit à un procès équitable",
      "Le droit à la santé",
      "Le droit à la propriété privée"
      ],
      answer: 0
      },
      {
      article: 31,
      question: "Quels services publics sont garantis par l'article 31 ?",
      options: [
      "L'enseignement, la formation professionnelle, l'accès à la culture, à la santé, à l'emploi, au logement décent, et à l'eau",
      "Le transport gratuit",
      "Le logement pour tous",
      "Le droit de vote"
      ],
      answer: 0
      },
      {
      article: 32,
      question: "Quel est le rôle de la famille selon l'article 32 ?",
      options: [
      "La famille, fondée sur le lien légal du mariage, est la cellule de base de la société",
      "La famille est sans importance",
      "La famille doit être limitée",
      "La famille doit être contrôlée par l'État"
      ],
      answer: 0
      },
      {
    article: 33,
    question: "Quel est le rôle de l'État envers la jeunesse selon l'article 33 ?",
    options: [
        "L'État doit éduquer la jeunesse uniquement",
        "L'État doit former la jeunesse uniquement",
        "L'État doit assurer la protection de la jeunesse, de son éducation, de sa formation et de son intégration dans la vie active",
        "L'État doit ignorer la jeunesse"
    ],
    answer: 2
},
{
    article: 34,
    question: "Quels droits sont garantis aux personnes en situation de handicap selon l'article 34 ?",
    options: [
        "Aucun droit",
        "Les mêmes droits que les autres citoyens",
        "Des droits limités",
        "Des droits uniquement en matière d'emploi"
    ],
    answer: 1
},
{
    article: 35,
    question: "Quelle est la politique de l'État envers l'environnement selon l'article 35 ?",
    options: [
        "Une politique destructrice de l'environnement",
        "Une politique neutre",
        "Une politique de protection de l'environnement, de sa préservation et de la lutte contre la pollution",
        "Une politique d'ignorance de l'environnement"
    ],
    answer: 2
},
{
    article: 36,
    question: "Quelle est la politique de l'État envers la culture selon l'article 36 ?",
    options: [
        "Une politique de destruction de la culture",
        "Une politique neutre",
        "Une politique de valorisation et de protection de la culture marocaine, de son développement et de sa diffusion",
        "Une politique d'ignorance de la culture"
    ],
    answer: 2
},
{
    article: 37,
    question: "Quel est le devoir des pouvoirs publics envers la protection sociale selon l'article 37 ?",
    options: [
        "Les ignorer",
        "La garantie de la protection sociale aux travailleurs et à leurs familles",
        "La protection sociale uniquement pour les personnes âgées",
        "La protection sociale uniquement pour les fonctionnaires"
    ],
    answer: 1
},
{
    article: 38,
    question: "Quel est le devoir de l'État envers la santé selon l'article 38 ?",
    options: [
        "Ignorer les questions de santé",
        "La garantie de la protection de la santé à tous les citoyens",
        "La protection de la santé uniquement pour les riches",
        "La protection de la santé uniquement pour les personnes âgées"
    ],
    answer: 1
},
{
    article: 39,
    question: "Quelle est la politique de l'État envers l'éducation selon l'article 39 ?",
    options: [
        "Une politique d'ignorance de l'éducation",
        "Une politique de valorisation et de généralisation de l'éducation",
        "Une politique de limitation de l'éducation",
        "Une politique d'exclusion de l'éducation"
    ],
    answer: 1
},
{
    article: 40,
    question: "Quelle est la politique de l'État envers la jeunesse et le sport selon l'article 40 ?",
    options: [
        "Une politique de désintérêt",
        "Une politique de promotion de la jeunesse et du sport",
        "Une politique de répression",
        "Une politique de restriction"
    ],
    answer: 1
},
{
    article: 41,
    question: "Quel est le rôle de la culture amazighe selon l'article 41 ?",
    options: [
        "Une culture secondaire",
        "Une culture ignorée",
        "Une culture constitutive de l'identité nationale marocaine",
        "Une culture uniquement dans certaines régions"
    ],
    answer: 2
},
{
    article: 42,
    question: "Quelle est la politique de l'État envers la femme selon l'article 42 ?",
    options: [
        "Une politique de discrimination",
        "Une politique d'ignorance",
        "Une politique de promotion de l'égalité et de l'équité",
        "Une politique de suppression"
    ],
    answer: 2
},
{
    article: 43,
    question: "Quelle est la politique de l'État envers la protection de l'environnement selon l'article 43 ?",
    options: [
        "Une politique de destruction",
        "Une politique d'indifférence",
        "Une politique de valorisation et de protection",
        "Une politique de limitation"
    ],
    answer: 2
},
{
    article: 44,
    question: "Quel est le rôle de l'État envers la parité selon l'article 44 ?",
    options: [
        "La promotion de la discrimination",
        "L'ignorance de la parité",
        "La promotion de la parité homme-femme dans les instances élues",
        "La suppression de la parité"
    ],
    answer: 2
},
{
    article: 45,
    question: "Quelle est la politique de l'État envers la préservation du patrimoine selon l'article 45 ?",
    options: [
        "Une politique de destruction du patrimoine",
        "Une politique d'indifférence",
        "Une politique de préservation et de valorisation du patrimoine national",
        "Une politique de restriction"
    ],
    answer: 2
},
  {
      article: 46,
      question: "Quel est le statut de la personne du Roi selon l'article 46 ?",
      options: [
          "La personne du Roi est inviolable et sacrée",
          "La personne du Roi peut être jugée",
          "La personne du Roi est élue",
          "La personne du Roi est un fonctionnaire public"
      ],
      answer: 0
  },
  {
      article: 47,
      question: "Qui nomme le chef du gouvernement selon l'article 47 ?",
      options: [
          "Le Roi, parmi les membres du parti arrivé en tête des élections",
          "Le Parlement",
          "Les partis politiques",
          "Les électeurs"
      ],
      answer: 0
  },
  {
      article: 48,
      question: "Qui préside le Conseil des ministres selon l'article 48 ?",
      options: [
          "Le Roi",
          "Le chef du gouvernement",
          "Le Président du Parlement",
          "Le Ministre de l'Intérieur"
      ],
      answer: 0
  },
  {
      article: 49,
      question: "Quels sont les pouvoirs du Roi en matière de nomination selon l'article 49 ?",
      options: [
          "Le Roi nomme les titulaires des hautes fonctions civiles et militaires",
          "Le Roi ne nomme pas les fonctionnaires",
          "Le Roi nomme uniquement les fonctionnaires civils",
          "Le Roi nomme uniquement les fonctionnaires militaires"
      ],
      answer: 0
  },
  {
      article: 50,
      question: "Quel est le rôle du Roi en matière de promulgation des lois selon l'article 50 ?",
      options: [
          "Le Roi promulgue la loi dans les trente jours qui suivent la transmission au gouvernement de la loi définitivement adoptée",
          "Le Roi rédige les lois",
          "Le Roi contrôle le Parlement",
          "Le Roi supprime les lois"
      ],
      answer: 0
  },
  {
      article: 51,
      question: "Quel est le rôle du Parlement en matière de délégation de pouvoirs selon l'article 51 ?",
      options: [
          "Le Parlement peut déléguer au gouvernement, pendant un délai limité et pour un objet déterminé, le pouvoir de prendre des actes législatifs",
          "Le Parlement ne peut pas déléguer ses pouvoirs",
          "Le Parlement délègue ses pouvoirs de manière permanente",
          "Le Parlement contrôle le gouvernement"
      ],
      answer: 0
  },
  {
      article: 52,
      question: "Quel est le rôle du Roi en matière de messages au Parlement selon l'article 52 ?",
      options: [
          "Le Roi peut adresser des messages au Parlement et ces messages ne font l'objet d'aucun débat",
          "Le Roi ne peut pas s'adresser au Parlement",
          "Les messages du Roi font l'objet de débats",
          "Le Roi contrôle les débats parlementaires"
      ],
      answer: 0
  },
  {
      article: 53,
      question: "Quel est le rôle du Roi en matière de défense nationale selon l'article 53 ?",
      options: [
          "Le Roi est le chef suprême des Forces Armées Royales",
          "Le Roi n'a pas de rôle en matière de défense",
          "Le Roi nomme les officiers",
          "Le Roi supprime l'armée"
      ],
      answer: 0
  },
  {
      article: 54,
      question: "Quel est le rôle du Conseil supérieur de sécurité selon l'article 54 ?",
      options: [
          "Il assure l'institutionnalisation des normes de sécurité nationale",
          "Il contrôle les médias",
          "Il gère l'économie",
          "Il nomme les ministres"
      ],
      answer: 0
  },
  {
      article: 55,
      question: "Quel est le pouvoir du Roi en matière de ratification des traités selon l'article 55 ?",
      options: [
          "Le Roi ratifie les traités après leur approbation par le Parlement",
          "Le Roi signe les traités sans l'approbation du Parlement",
          "Le Roi ne ratifie pas les traités",
          "Le Roi rédige les traités"
      ],
      answer: 0
  },
  {
      article: 56,
      question: "Quel est le rôle du Roi en matière de justice selon l'article 56 ?",
      options: [
          "Le Roi est le garant de l'indépendance du pouvoir judiciaire",
          "Le Roi contrôle les juges",
          "Le Roi rédige les lois",
          "Le Roi nomme les avocats"
        ],
        answer: 0
    },
    {
        article: 57,
        question: "Quel est le rôle du Roi en matière de nomination des juges selon l'article 57 ?",
        options: [
            "Le Roi nomme les magistrats par dahir sur proposition du Conseil supérieur du pouvoir judiciaire",
            "Le Roi ne nomme pas les juges",
            "Le Roi contrôle les juges",
            "Le Roi nomme les juges sans proposition"
        ],
        answer: 0
    },
    {
        article: 58,
        question: "Quel est le pouvoir du Roi en matière de grâce selon l'article 58 ?",
        options: [
            "Le Roi exerce le droit de grâce",
            "Le Roi ne peut pas accorder de grâce",
            "Le Roi rédige les lois",
            "Le Roi contrôle les juges"
        ],
        answer: 0
    },
    {
        article: 59,
        question: "Quel est le rôle du Roi en cas de menace grave selon l'article 59 ?",
        options: [
            "Le Roi peut déclarer l'état d'exception après consultation du Chef du gouvernement, du Président de la Chambre des représentants, du Président de la Chambre des conseillers, et du Président de la Cour constitutionnelle",
            "Le Roi ne peut pas déclarer l'état d'exception",
            "Le Roi contrôle les débats parlementaires",
            "Le Roi supprime l'armée"
        ],
        answer: 0
    },
    {
        article: 60,
        question: "Quel est le statut des membres du Parlement selon l'article 60 ?",
        options: [
            "Les membres du Parlement ne peuvent pas changer d'appartenance politique",
            "Les membres du Parlement peuvent changer de parti à tout moment",
            "Les membres du Parlement sont nommés par le Roi",
            "Les membres du Parlement ne sont pas élus"
        ],
        answer: 1
    }
];


const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];
    quiz.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        currentQuestion.options.forEach((option, index) => {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${index}">
                    ${option}
                </label>`
            );
        });
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    document.getElementById('quiz').innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let numCorrect = 0;
    quiz.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = parseInt((answerContainer.querySelector(selector) || {}).value);
        if (userAnswer === currentQuestion.answer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} sur ${quiz.length} correct`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
