import cookie from 'react-cookies'
export const _setCookies = (name,value,day) =>{
    const expires = new Date()
    expires.setDate(expires.getDate() + day);        
    return cookie.save(name,value,{
       path: '/',
       expires,                       
       secure: false      
       });
}

export const _readCookie = (name) =>{
    return cookie.load(name);
}

export const _planetRatio = (Population) => {
    const population = parseInt(Population);
    if( population < 200000){
        return 16;
    }else if(population > 200000 && population< 100000){
        return 19;
    }else if(population >100000 && population <2500000){
        return 22;
    }else if (population >2500000 && population < 10000000){
        return 25;
    }else if(population >10000000 && population < 100000000){
        return 28;
    }else if(population > 100000000 & population < 1000000000){
        return 31;
    }else{
        return 34;
    }
}