// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

console.log(`JS OK!`);

const app = new Vue({
    el: `#app`,
    data: {
        emails: []
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
                .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((response) => {
                    console.timeLog(response);
                    const { data, status } = response;
                    if (status === 200) {
                        this.emails.push(data.response);

                    }
                });
        }

    }
})