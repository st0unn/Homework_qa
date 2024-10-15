let chyslo=prompt('Введіть число, яке буде піднесене до степеня',);
let stepin=prompt('Введіть степінь, до якого буде піднесено число');

function pidnesStepin (chy, ste) {
    let result=chy;
    for (let i=1; i<ste; i++) {
        result=result*chy;
    }
    return (result);
}


pidnesStepin (chyslo, stepin);



    
    
    
    
    