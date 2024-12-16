# Understand the basic concept of use hook .
first we create a file in component file wioth propal coding like that file name "useAuth" in this file we create two function on for sign-in and one for signout and import all this fumction and usestate value which we set in state is imported as a custom hook . {signin, signUp ,state-name } by this we easily use this value in other file where we want this , like i have a simple file for render user from one file to other file by using router in next . here we want user go to other option and the person vist first time go to other page .. 

##### create another file 
which name is App.jsx here we apply all the logic where i user go after if he is sign-in or while he vist first time the page . 
1) first of all we import that custom hook that we export from the useauth.js file like that
```bash
//import the custom hook 
const {signin, signUp, state-name }=useAuth()
```
after importing this code u are easily use these function and value in curly bracket {signin} like that. 