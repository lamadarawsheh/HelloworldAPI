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
