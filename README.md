# node js & express

## File structure

  <ul>
    <li>conrtollers</li>
    <li>middlewares</li>
    <li>public</li>
    <li>routes</li>
    <li>faceData</li>
  </ul>

## Routes GET =>user/random

 <p>Get a random user from the .json file </p>

## Routes GET =>user/all or user/all?limit=3(number)

 <p>Get all the users from the .json file. </p>
 <p>Limit the number of users using query parameter(number) .</p>

## Routes POST =>user/save

 <p>Save a user in the .json file. </p>

## Routes PATCH =>user/update

 <p>Update a user's information in the .json file using its id. </p>

## Routes PATCH =>user/bulk-update

 <p>Multiple user updates</p>
 <p>Update multiple users information in the json file take an array of user ids and assign it to the body. </p>

## Routes PATCH =>user/delete

 <p>Delete a user from json file using its id.</p>
