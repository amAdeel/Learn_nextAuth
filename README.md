# understand basic concept of useAuth in next.js 
first we create a file useAuth.js in which we create sign-in and sign-up page and at last we return this as a custom hook {in this } for use in other file easily 
then create a component file in which we use this file and see autentication .

# Now i Add protection layer on all of this 
create a folder in src/component/protected layer mean only register user may vist the cartain page and not other vist this page who want to go to this page he want to register first then he may to go there .

#  working 
here we have two file admin and protected folder here come a problem here we add a feauture first understnad what the problem here comes that make problem for both of us what was that , admin panel only for admin and is botton also not show in guest dashboard now come a problem here , when guest click on search link and type /admin then he able to access admin dashboad that not good for me what we do now , for that we add a feature that is add protection layer mean after that only admin only able to access this folder . ok that fine now . 
for that we write our code in useEffect mean while load time they juge who is the authuser he is the admin he is guest user see code now 
```bash 
  useEffect(()=>{
    if(!loading && authUser.role !== ("admin")){
      router.push("/");
    }

  },[loading,authUser])
```
first we import the authUser detail that help us , in our code first we judge who is the user , our code say that 
1) !loading if loading stop then move next .
2) authuser.role !== ("admin") says that if the authuser.role not equal to admin then move to home page .
