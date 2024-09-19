export const exerciseOptions ={
        method: 'GET',
        headers: {

          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          'x-rapidapi-key': 'adb73df5b0mshc1aa43349fd2c87p116b3ejsnb06e47f31d5b'
        }
      };
      export const youtubeOptions= {
        method: 'GET',
        
        headers: {
          'x-rapidapi-key': 'adb73df5b0mshc1aa43349fd2c87p116b3ejsnb06e47f31d5b',
          'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      
export const fetchData= async (url,options)=> {
const response =await fetch(url,options);
const data =await response.json();
return data;
}