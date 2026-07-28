export type Article = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'sas-sarl-quelle-forme-juridique',
    title: 'SAS ou SARL : quelle forme juridique choisir ?',
    date: '2025',
    excerpt: "SAS et SARL sont les deux formes sociales les plus choisies par les créateurs d'entreprise. Elles se ressemblent mais diffèrent sur des points décisifs : gouvernance, régime social du dirigeant, cession des titres.",
    content: `
<p>Lors de la création d'une société, le choix entre SAS (Société par Actions Simplifiée) et SARL (Société à Responsabilité Limitée) est l'une des premières décisions à prendre. Ces deux formes offrent une responsabilité limitée aux associés, mais leur fonctionnement diffère sur plusieurs points essentiels.</p>

<h2>La gouvernance</h2>
<p>La SAS est caractérisée par sa grande liberté statutaire : les associés organisent librement la gouvernance dans les statuts. Le président est le représentant légal, mais les statuts peuvent créer autant d'organes de direction que nécessaire. La SARL, elle, obéit à un cadre légal plus rigide : le gérant est nommé par les associés et ses pouvoirs sont définis par la loi.</p>

<h2>Le régime social du dirigeant</h2>
<p>C'est souvent le critère décisif. Le président de SAS est assimilé salarié : il relève du régime général de la Sécurité sociale, ce qui implique des cotisations plus élevées mais une protection sociale plus complète. Le gérant majoritaire de SARL est travailleur non salarié (TNS) : ses cotisations sont moins élevées, mais sa protection est moins étendue, notamment en matière de prévoyance et de retraite.</p>

<h2>La cession des titres</h2>
<p>En SAS, les actions sont librement cessibles sauf clause contraire dans les statuts (clause d'agrément, de préemption). En SARL, la cession de parts sociales à un tiers est soumise à l'agrément des associés représentant au moins la moitié des parts — un mécanisme de protection plus contraignant.</p>

<h2>La levée de fonds et l'entrée d'investisseurs</h2>
<p>La SAS est de loin la forme préférée des startups et des projets nécessitant des tours de table : elle permet d'émettre des actions de préférence, des BSA, des BSPCE, des obligations convertibles. La SARL est moins adaptée à ces montages.</p>

<p>Le choix entre les deux formes dépend de votre situation personnelle, de vos ambitions de développement et de votre environnement d'associés. N'hésitez pas à consulter pour analyser votre projet.</p>
`,
  },
  {
    slug: 'cession-fonds-de-commerce-etapes',
    title: 'Cession de fonds de commerce : les étapes clés',
    date: '2025',
    excerpt: "La vente d'un fonds de commerce obéit à un formalisme strict. De la promesse de vente à l'acte définitif, plusieurs étapes sont incontournables pour sécuriser l'opération, côté vendeur comme côté acquéreur.",
    content: `
<p>La cession d'un fonds de commerce est une opération juridiquement encadrée qui nécessite le respect d'un formalisme précis. Une erreur de procédure peut entraîner la nullité de la vente ou engager la responsabilité du cédant.</p>

<h2>La lettre d'intention et la promesse de vente</h2>
<p>Avant l'acte définitif, les parties signent généralement une promesse synallagmatique de cession ou un compromis. Ce document fixe le prix, les conditions suspensives (obtention d'un prêt, accord du bailleur, etc.) et la date de réitération. Il engage les deux parties.</p>

<h2>Les obligations d'information précontractuelle</h2>
<p>Le cédant doit communiquer à l'acquéreur un ensemble de documents : les trois derniers bilans, l'état des contrats en cours, le bail commercial, les éventuels privilèges et nantissements inscrits. Cette information précontractuelle est essentielle pour permettre à l'acquéreur de prendre une décision éclairée.</p>

<h2>La purge du droit de préemption de la commune</h2>
<p>La commune dispose d'un droit de préemption sur les cessions de fonds de commerce situés dans un périmètre de sauvegarde du commerce de proximité. Le vendeur doit en informer la mairie avant la signature de l'acte définitif, par déclaration préalable. La commune dispose d'un délai de deux mois pour exercer ce droit.</p>

<h2>L'acte de cession et la publicité</h2>
<p>L'acte définitif de cession doit mentionner des éléments précis : le prix de vente, l'état des inscriptions de privilèges et nantissements, les chiffres d'affaires des trois dernières années, les résultats d'exploitation. Il doit être enregistré et publié dans un journal d'annonces légales.</p>

<h2>La séquestration du prix</h2>
<p>Le prix de cession est séquestré pendant un délai de purge permettant aux créanciers du vendeur de former opposition. Ce délai est généralement de trois mois. Le séquestre est libéré une fois les oppositions levées ou traitées.</p>

<p>Chaque cession est unique. Pour sécuriser la vôtre, prenez contact dès la phase de négociation.</p>
`,
  },
  {
    slug: 'recouvrement-creances-amiable-judiciaire',
    title: 'Recouvrement de créances : amiable puis judiciaire',
    date: '2025',
    excerpt: "Une facture impayée n'est pas une fatalité. Avant de saisir le tribunal, des procédures amiables permettent souvent de recouvrer rapidement sa créance. Le point sur les outils disponibles.",
    content: `
<p>Le recouvrement de créances est une réalité quotidienne pour beaucoup d'entreprises. Une approche structurée, combinant relances amiables et procédures judiciaires adaptées, permet dans la plupart des cas de récupérer les sommes dues sans s'engager dans un contentieux long et coûteux.</p>

<h2>La phase amiable : indispensable avant toute action</h2>
<p>Avant d'envisager une procédure judiciaire, il est impératif d'avoir tenté de régler le différend à l'amiable. Cela passe par des relances écrites traçables (email avec accusé de réception, lettre recommandée avec AR), une mise en demeure formelle précisant le délai de paiement et les conséquences du défaut, et si nécessaire une proposition d'échelonnement.</p>
<p>La mise en demeure est un acte important : elle constitue une preuve de la créance et de la mauvaise foi du débiteur, et elle fait courir les intérêts de retard.</p>

<h2>L'injonction de payer</h2>
<p>C'est la procédure judiciaire de recouvrement la plus rapide et la moins coûteuse. Elle est disponible pour les créances contractuelles certaines, liquides et exigibles. La requête est déposée auprès du tribunal compétent ; si elle est accordée, l'ordonnance constitue un titre exécutoire permettant de procéder à des mesures d'exécution (saisie-attribution, saisie des comptes bancaires).</p>

<h2>La procédure au fond</h2>
<p>Lorsque la créance est contestée ou que le débiteur a formé opposition à l'injonction de payer, il faut assigner au fond. Selon le montant et la nature de la créance, le tribunal judiciaire ou le tribunal de commerce sera compétent.</p>

<h2>Les mesures conservatoires</h2>
<p>En cas d'urgence ou de risque de dissipation des actifs du débiteur, des mesures conservatoires peuvent être demandées avant même l'obtention d'un jugement : saisie conservatoire de comptes bancaires, saisie conservatoire de créances sur tiers.</p>

<p>Un conseil précoce permet souvent d'éviter des procédures longues. Contactez le cabinet dès les premiers impayés.</p>
`,
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
