// console.log('test');

const { createApp } = Vue


createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatars/avatar_1.jpg',
                    visible: true,
                    displayChat: true,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di stendere i panni',
                            status: 'sent',
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatars/avatar_2.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatars/avatar_3.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                        },
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatars/avatar_4.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        },
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatars/avatar_5.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Va bene, stasera la sento',
                            status: 'received',
                        },
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatars/avatar_6.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Non ancora',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                        },
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatars/avatar_7.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                        },
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatars/avatar_8.jpg',
                    visible: true,
                    displayChat: false,
                    messages: [
                        {
                            date: '',
                            text: '',
                            status: 'none',
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'OK!!',
                            status: 'received',
                        },
                    ],
                },
            ],
            messageText: '',
            searchUser: '',
            DateTime: luxon.DateTime,
            showEmoticons: true,
            emoticons: [
                {
                    name: 'smile',
                    text: '😊',
                },
                {
                    name: 'cry',
                    text: '😢',
                },
                {
                    name: 'love',
                    text: '😍',
                },
                {
                    name: 'like',
                    text: '👍',
                },
                {
                    name: 'heart',
                    text: '❤️',
                },
            ],
        }
    },
    methods: {
        displayChat(index) {
            this.contacts.map(contact => contact.displayChat = false);
            this.contacts[index].displayChat = true;
        },
        sendMessage(index, text) {
            this.messageText = text
            const newMessage = {date: this.currentDate(), text: this.messageText, status: 'sent',};
            this.messageText.length !== 0 ? (this.contacts[index].messages.push(newMessage),this.messageText='') : null;
            // console.log(this.contacts[index].messages);
        },
        sendDefeaultReply(index) {
            const defeaultReply = {date: this.currentDate(), text: 'ok', status: 'received',};
            setTimeout(() => this.contacts[index].messages.push(defeaultReply), 1000);
        },
        searchUserName() {
            // console.log(this.searchUser.toLowerCase());
            this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchUser.toLowerCase()) ? contact.visible = true : contact.visible = false);
        },
        remove(index, msgId) {
            // console.log(this.contacts[index].messages.splice(msgId,1));
            this.contacts[index].messages.splice(msgId,1);
            console.log(this.contacts[index].messages[msgId].text);
        },
        messageDate(index, msgId) {
            // console.log(this.contacts[index].messages[msgId].date);
            return this.contacts[index].messages[msgId].date;
        },
        lastMessage(index) {
            // console.log(this.contacts[index].messages[this.contacts[index].messages.length-1].text);
            return this.contacts[index].messages[this.contacts[index].messages.length-1].text;
        },
        lastAccess(index) {
            // console.log(this.contacts[index].messages[this.contacts[index].messages.length-1].date);
            return this.contacts[index].messages[this.contacts[index].messages.length-1].date;
        },
        currentDate() {
            // console.log(this.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'));
            return this.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
        },
        addEmoteText(index) {
           this.messageText += this.emoticons[index].text
        //    console.log(this.messageText);
        },
    },
    mounted() {
            /* console.log('show: '+ ); */
            
    },
}).mount('#app')