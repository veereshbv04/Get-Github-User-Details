const userName = document.querySelector("#username");
const searchButton = document.querySelector("#search");
const errorDiv = document.querySelector("#for-error");
const successDiv = document.querySelector("#for-success");
const outputList = document.querySelectorAll(".outPutList");


var url = "https://api.github.com/users/"



function errorHandler(error){
    console.log("Error is " + error);
}


searchButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("btn pressed");
    var userText = userName.value; 
    fetch(url+userText)
    .then(function parseResponse(response){
       
        console.log(response)
        if(response.status === 404){
            console.log("Not found")
            errorDiv.innerText = `Not Found ${userText}, no GitHub account exists with this username.`
        }else{
            errorDiv.style.display="none"; 
        }
        return response.json()
    })
    .then(function jsonData(json){
       
        
        console.log(json);

        var name = json.name ;
        var id = json.id;
        var last_active = json.updated_last;
        var created = json.created_at;
        var website = json.blog;
        var company = json.company;
        var followers = json.followers;
        var following = json.following;
        var location = json.location;
        var userUrl = json.html_Url;
        var twitter = json.twitter_username;
       console.log(followers)
        dataArray=[
            ["Name : ", name],
            ["last Active : ",  last_active],
            ["User ID : ",  id],
            ["Account created on : ", created],
            ["Website : ", website],
            ["company : " , company],
            ["Number of Followers : " , followers],
            ["Following : ",following],
            ["Location : ", location],
            ["URL is : ", userUrl],
            ["Twitter Handle : ",twitter]    
        ]

        for(let i= 0; i<dataArray.length; i++ ){
            console.log(i);
            outputList[i].innerText = dataArray[i][0] + dataArray[i][1];
        }

        
       
  
    })
    .catch(errorHandler); 
        
})