// This middleware protect our app from users who are not signed in to access certain paths,
//  and once they access them they will be redirected to the signin Page

export { default } from "next-auth/middleware";

// Here we define the protected paths

export const config = {
  matcher: ["/issues/new", "/issues/edit/:id+"],
};

// if we set the edit route without this "+" sign it won't work if we used a paramater,
// so we tell next-auth that we want to redirect the user if they access the edit page and any params after it
