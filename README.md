API for Sailor Moon Characters
This API provides information about Sailor Moon characters, including their names, Japanese names, English names, associated moons, and images.

Endpoints

1. Get All Characters
   Endpoint: /api/characters
   Method: GET
   Description: Get a list of all Sailor Moon characters.
   Response: An array of character objects containing their details.
2. Get Character by ID
   Endpoint: /api/characters/:id
   Method: GET
   Description: Get a specific character by their unique ID.
   Response: A character object containing the details of the specified character.
3. Create a New Character
   Endpoint: /api/characters
   Method: POST
   Description: Create a new Sailor Moon character.
   Request Body: An object containing character details (name, Japanese name, English name, associated moon, and image URL).
   Response: The created character object.
4. Update Character by ID
   Endpoint: /api/characters/:id
   Method: PUT
   Description: Update an existing character by their ID.
   Request Body: An object containing the updated character details.
   Response: The updated character object.
5. Delete Character by ID
   Endpoint: /api/characters/:id
   Method: DELETE
   Description: Delete a character by their ID.
   Response: A success message indicating the deletion status.
6. Get Character by Name
   Endpoint: /api/characters/name/:name
   Method: GET
   Description: Get a character by their name.
   Response: An array of character objects matching the provided name.
   Usage
   To use this API, send requests to the specified endpoints using the appropriate HTTP methods (GET, POST, PUT, DELETE). Ensure the request body is in JSON format for POST and PUT requests.

Setup
Clone the repository.
Install dependencies using npm install.
Create a MongoDB database and provide the connection URI in connections.js.
Run the seed script to populate the database with initial data: npm run seed.
Start the server using npm start.
Access the API endpoints at http://localhost:3000/api/characters.
Feel free to explore the API and enjoy Sailor Moon character details!

Heroku: Demira11/API-project-Sailor-moon
