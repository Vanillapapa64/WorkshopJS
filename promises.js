function fetch(){
    return new Promise((resolve,reject)=>{
        try {
            setTimeout(()=>{
                const greet="Hey everyone,I took 4 seconds to run."
                resolve(greet)
            },4000)
        } catch (error) {
            reject(error)
        }
    })
}
console.log(fetch())
fetch().then(response=>console.log(response))