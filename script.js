const backend = {}

backend.base_url = "http://localhost/login_assi/";

backend.print_message = (msg) => {
    console.log(msg);
}

backend.login = async () => {
    try{
        var data = new FormData();
        data.append('email', 'ameramer1@gmail.com');
        data.append('password', '123123123');
        let result = await axios.post(
            backend.base_url + 'login.php',
            data,
        );

        console.log(result);

    }catch(error){
        backend.print_message("Error from Linking (POST)" + error)
    }
}

function play() {
    console.log('we are playing');
}





