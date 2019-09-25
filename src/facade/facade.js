export default class Facade{
    
    async GetAll() {
        try {
            let results = await window.fetch("http://localhost:8080/FortnoxRestAPI/webresources/web.boxes", {
                method: 'GET',
            });
            let resultsData = await results.json();
            return resultsData;
         } catch(error) {
            console.log(error);
         }
    }
    async CreateBox(newData) {
        try {
            let results = await window.fetch("http://localhost:8080/FortnoxRestAPI/webresources/web.boxes", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newData)
                
            });
            let resultsData = await results.json();
            return resultsData;
         } catch(error) {
            console.log(error);
         }
    }
}