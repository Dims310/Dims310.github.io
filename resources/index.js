async function fetchData() {
   try {
      const gitHubResponse = await fetch('https://api.github.com/users/dims310/repos');

      if (!gitHubResponse.ok) {
         throw new Error(`HTTP error! Status: ${gitHubResponse.status}`);
      }

      return gitHubResponse;
   } catch (error) {
      console.error('Fetch error:', error);
   }
}
 
fetchData();