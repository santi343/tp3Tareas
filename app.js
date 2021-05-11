const {listar}= require( './tareasJs');

listar();

if( process.argv[3]){
    switch (true) {
        case "listar":
            listar();
            
            break;
    
    
    }
}else{
    console.log(Atencion);
}

