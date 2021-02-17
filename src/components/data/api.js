const api = 'https://4p8a5avabd.execute-api.us-west-2.amazonaws.com/Production'

export const loadData = async (endpoint, setter) => {
    //step 3 query api gateway
    try {
      const resp = await fetch(`${api}/${endpoint}`);
      //assign to the state var
      let jsonData = await resp.json();

      setter(jsonData);
    } catch (error) {
      console.log("api call failed => REASON: " + error);
    }
  };