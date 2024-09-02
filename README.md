# HelloworldAPI
is a simple API that consists of 2 endpoints :

--First Endpoint:
    GET /hello?name={SOME_NAME}
    Response is like this:
    {
    "greeting": "Hello, {SOME_NAME}"
    }
    If no name is provided, then the response should be:
    {
    "greeting": "Hello, World!"
    }

--Second Endpoint:
    GET /info
    Response is like this :
    Request time formatted in ISO8601
    Client IP Address
    Server/Host name
    Client Request Headers
    Example response:
    {
    "time": "2024-08-24T14:15:12Z",
    "client_address": "192.168.1.1",
    "host_name": "my-great-server",
    "headers": {
    "Accept": "all",
    "User-Agent": "curl 1/123"
    }
    }
--Prerequisites:
    Ensure you have the Node.js  installed.
    
--Installing :
    to run HelloworldAPI locally follow these steps:
1-clone the repository
        git clone https://github.com/lamadarawsheh/HelloworldAPI.git
2- cd helloworldapi

3-to install required dependencies run 
         npm install        
4- adjust this line of code in index.ts if needed to accomodate to your application requirement since this port maybe occupied 
    <img width="447" alt="Screenshot 2024-09-02 at 6 58 36 PM" src="https://github.com/user-attachments/assets/2417be29-8047-4033-a4b4-1fca2dc64bcf">
    
5-Start the Server by running this command:
        npm start
6-test the endpoints using postman for example

-test firstendpoint :
   GET http://localhost:3000/hello?name=YourName
if no name is provided use:
   GET http://localhost:3000/hello
-test secondendpoint :  
   GET  http://localhost:3000/info

And that's it, you ran HElloworldAPI  successfully  .

        

        
    
   
