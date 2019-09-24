export default class Facade{
    
    async GetAll() {
        console.log("hello");
        try {
            let res = await window.fetch("http://localhost:8080/FortnoxRestAPI/webresources/web.boxes", {
                method: 'GET',
            });
            let data = await res.json();
            return data;
         } catch(err) {
            console.log(err);
         }
    }
    async CreateBox(newData) {
        try {
            let res = await window.fetch("http://localhost:8080/FortnoxRestAPI/webresources/web.boxes", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newData)
                
            });
            let data = await res.json();
            return data;
         } catch(err) {
            console.log(err);
         }
    }
}