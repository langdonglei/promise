 new Vue({
        el: '#vue',
        data: {
            aweme: {},
            awemes: [],
        },
        methods: {
            getAwemes() {
                return new Promise(resolve => {
                    axios('getAwemes.php')
                        .then(res => {
                            this.$data.awemes = res.data
                            this.$data.aweme = res.data[0]
                        })
                        .then(() => resolve())
                })
            },
            getData() {
                axios('getData.php?uid=' + this.$data.aweme.uid).then(res => ec.setOption({dataset: {source: res.data}}))
            },
        },

        mounted() {
            this.getAwemes().then(() => {
                this.getData()
            })
        },
    })