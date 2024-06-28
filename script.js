var id = 0

// fonction pour envoyer le message
document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    document.getElementById('user-input').value = '';
    addMessage('User', userInput);
    await respondToUser(userInput);
});


// ajouté le message et différencié 
function addMessage(sender, message) {
    id ++
    const output = document.getElementById('output');
    const messageElement = document.createElement('div');
    const containerMessage = document.createElement('div');
    const imageBot = document.createElement('img');
    imageBot.src = "robot.png";
    imageBot.width = 20;
    imageBot.height = 20;
    messageElement.classList.add('message');
    containerMessage.classList.add('containerMessage');
    messageElement.textContent = message;

    if (sender === 'User') {
        containerMessage.classList.add('container-user-message');
        messageElement.classList.add('user-message');
        messageElement.id = id
        output.appendChild(containerMessage);
        console.log(id)
    } else {
        containerMessage.classList.add('container-bot-message');
        messageElement.classList.add('bot-message');
        messageElement.id = id
        output.appendChild(containerMessage);
        containerMessage.appendChild(imageBot);
        console.log(messageElement)
    }

    containerMessage.appendChild(messageElement);
    output.scrollTop = output.scrollHeight;
}

// le code du chatbot
async function respondToUser(userInput) {
    let response = '';
    userInput = userInput.toLowerCase()

    if (userInput.includes('bonjour') || userInput.includes('hello') || userInput.includes('salut')) {
        response = 'Bonjour! Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('bonsoir')) {
        response = 'Bonsoir! Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('ca va') && userInput.includes('?') || userInput.includes('ça va') && userInput.includes('?')) {
        response = 'Je vais bien merci, et vous, comment allez vous ?';
    } else if (userInput.includes('ca va') || userInput.includes('ça va') || userInput.includes('ça va')) {
        response = 'Heureux de savoir que vous allez bien !';
    } else if (userInput.includes('aide')) {
        response = 'Je suis Kintsugi, un chatbot qui peut vous aider avec des questions sur la santé mentale et le soutien émotionnel. Comment puis-je vous aider aujourd\'hui?';
    } else if (userInput.includes('merci')) {
        response = 'De rien! N\'hésitez pas si vous avez d\'autres questions.';
    } else if (userInput.includes('bye')) {
        response = 'Au revoir! Passez une bonne journée.';
    } else if (userInput.includes('dépression') || userInput.includes('triste') || userInput.includes('perdu') || userInput.includes('perdue') || userInput.includes('ennuyeux') || userInput.includes('angoisse') || userInput.includes('angoissant')) {
        response = 'Je suis désolé que vous vous sentiez ainsi. La dépression et l\'anxiété sont des maladies mentales sérieuses. Il est important de parler à un professionnel de la santé. En attendant, vous pouvez essayer quelques techniques de relaxation : \n\n- Méditation : trouvez un endroit calme, asseyez-vous confortablement et concentrez-vous sur votre respiration pendant quelques minutes. \n Vous pouvez aussi trouver d\'autre méthode de relaxation dans l\'application les heures de kintsugi dans l\'onglet séances.';
    } else if (userInput.includes('cancer')) {
        response = 'Le cancer est une maladie où des cellules anormales se divisent de manière incontrôlée et détruisent les tissus corporels. Des cancers ont déjà été guerie, ce n\'est donc pas fini. Nous sommes là pour vous aider à traverser cette période difficile.';
    } else if (userInput.includes('relax') || userInput.includes('concentr')) {
        response = 'Voici un exercice de respiration : inspirez profondément pendant 4 secondes, retenez votre souffle pendant 7 secondes, puis expirez lentement pendant 8 secondes. Répétez cela cinq fois. \n Vous pouvez aussi trouver d\'autre méthode de relaxation dans l\'application les heures de kintsugi dans l\'onglet séances.';
    } else if (userInput.includes('tribu')) {
        response = 'La tribu représente votre réseau de soutien social. Avez-vous parlé à vos amis ou à votre famille récemment ? Ils peuvent être une source de réconfort et de force.';
    } else if (userInput.includes('thérap') || userInput.includes('therap')) {
        response = 'Une thérapie peut être vraiment bon pour vous, cela peut vous faire voir d\'autres perspective, parler avec des professionnelles dans le milieu de la santé. Les professionnelles ne sont pas disponible sur la plateforme acutellement, mais je reste disponible pour vous.';
    } else if (userInput.includes('aliment')) {
        response = 'Une alimentation équilibrée est essentielle pour maintenir une bonne santé. Essayez d\'inclure des fruits, des légumes, des protéines maigres et des grains entiers dans votre alimentation.';
    } else if (userInput.includes('activité physique') || userInput.includes('sport')) {
        response = 'L\'activité physique est importante pour votre bien-être général. Essayez de faire au moins 15 minutes d\'exercice modéré chaque jour, comme la marche, le vélo, le yoga ou un sport que vous apprécié qui peux vous faire du bien.';
    } else if (userInput.includes('stress')) {
        response = 'Le stress peut avoir un impact négatif sur votre santé mentale et physique. Essayez de pratiquer des techniques de relaxation comme la respiration profonde, le yoga ou la méditation.';
    } else if (userInput.includes('angoiss')) {
        response = 'L\'angoisse est une réaction normale au stress, mais si elle devient trop intense ou fréquente, elle peut être un signe d\'un trouble anxieux. Respirer profondément, méditer, ou faire du yoga sont des moyens efficaces de gérer l\'angoisse. Nous pouvons d\'avantage vous aider sur notre application les heures de kintsugi.';
    } else if (userInput.includes('sommeil')) {
        response = 'Le sommeil est essentiel pour votre santé et votre bien-être. Essayez de vous coucher et de vous réveiller à la même heure chaque jour, et évitez les écrans et la caféine avant de dormir.';
    } else if (userInput.includes('environnement')) {
        response = 'Votre environnement peut avoir un impact significatif sur votre bien-être. Assurez-vous que votre espace de vie est propre, organisé et apaisant.';
    } else if (userInput.includes('soins de support')) {
        response = 'Les soins de support comprennent une variété de services qui aident à gérer les effets du cancer et de son traitement. Parlez à nos médecins sur notre application les heures kintsugi des options disponibles pour vous.';
    } else if (userInput.includes('parler')) {
        response = 'Bien sûr, je suis présent pour toi. Parle-moi de ce que tu ressens ou de ce qui te préoccupe.';
    } else if (userInput.includes('solitude')) {
        response = 'La solitude peut être très difficile à gérer. Essayez de rester en contact avec vos amis et votre famille. Même un simple message ou appel peut faire une grande différence.';
    } else if (userInput.includes('colère')) {
        response = 'La colère est une émotion naturelle, mais il est important de la gérer de manière saine. Essayez des techniques de relaxation comme la respiration profonde ou l\'exercice physique pour vous calmer.';
    } else if (userInput.includes('motivation')) {
        response = 'Il est normal de manquer de motivation parfois. Fixez-vous de petits objectifs réalisables et célébrez chaque succès, peu importe sa taille.';
    } else if (userInput.includes('espoir')) {
        response = 'Garder espoir est essentiel, même dans les moments difficiles. Souvenez-vous que chaque jour est une nouvelle opportunité pour aller mieux.';
    } else if (userInput.includes('courage')) {
        response = 'Il faut beaucoup de courage pour affronter les défis de la vie. Vous êtes plus fort que vous ne le pensez et chaque petit pas compte.';
    } else if (userInput.includes('maladi')) {
        response = 'Toute maladie est soignable, il faut juste garder espoir et se donner les moyens de réussir ce combat. Notre application les heures de kintsugi peut vous aider mentalement et physiquement grâce à nos programmes et professionnel de santé.';
    } else if (userInput.includes('kintsugi')) {
        response = 'Nous sommes une association qui permet aux personnes ayant une maladie ou des questions d\'être mieux informé et accompagner durant son parcours.';
    } else if (userInput.includes('pas bien')) {
        response = 'Je suis désolé de savoir que vous n\'allez pas bien, que puis-je faire pour vous ?.';
    }else {
        response = 'Désolé, je ne suis pas sûr de votre demande. Pouvez-vous reformuler?';
    }

    // Yoga : essayez quelques postures simples de yoga comme la pose de l\'enfant ou la pose du cadavre pour vous détendre.

    addMessage('Bot', response);
}

// au chargement le message
window.addEventListener('load', () => {
    addMessage('Bot', 'Bienvenue sur La vie Kintsugi. Comment puis-je vous aider aujourd\'hui ?');
});

// raccourcis clavier
document.getElementById('user-input').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        document.getElementById('user-input').value = '';
        addMessage('User', userInput);
        await respondToUser(userInput);
    }
});

// Changement de Thème bouton
document.querySelectorAll('.button-person').forEach(element => {
    element.addEventListener('click', function(){
        document.getElementById('active').removeAttribute('id')
        element.id = 'active'
    })    
});

