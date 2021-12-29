var scope = 'I am global';

const funtionScope = ()=>{
    var scope = 'I am local';
    const func = ()=>{
        return scope;
    }
    console.log( func() );
}

funtionScope();
// console.log(scope);


/*
NOTA:
Las variables globales deberian ser evitadas
*/ 