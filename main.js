
        // const userinput = document.getElementById('userinput');
        // const btn = document.getElementById('btn');
        // const outputmsg = document.getElementById('outputmsg');


        // function submit(){
        //     outputmsg.innerHTML = userinput.value;

        //     // for (let i = 0; i < userinput.length; i++) {
        //     //     const element = outputmsg[i];
                
        //     // }
        // }

        // btn.addEventListener('click', submit);

        const app = Vue.createApp({
            data() {
                 return {
                    enteredTasks: '',
                     tasks: [],
                     isShow: true
                };
            },
            methods: {
                addTask() {
                    this.tasks.push(this.enteredTasks);
                },
                removeTasks(idx) {
                    this.tasks.splice(idx, 1);
                }
            },
        });
        
        app.mount( '#assignment');