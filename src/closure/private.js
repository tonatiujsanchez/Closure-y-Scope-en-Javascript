// Closure y propiedades privadas

const person = ()=>{
    let saveName = "Name";
    return{
        getName: ()=>{
            return saveName;
        },
        setName: ( name )=>{
            saveName = name;
        }
    }
}

const newPerson = person();
console.log(newPerson.getName() );

newPerson.setName( 'Brandon' );
console.log(newPerson.getName() );
