import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left*/}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            The{" "}
            <span
              className="px-2 py-1 text-white bg-gradient-to-r from-red-600 to-blue-600 rounded-md font-comic shadow-md "
              style={{
                textShadow: "1px 1px 2px black",
                position: "relative",
              }}
            >
              Dailybugal
            </span>
          </Link>
          <p className="text-sm mt-5">
            This is the Dailybugal, place to find the recent activities
            regarding superheroes, kindly signup with your email id and password
            to move forrward.
          </p>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="text"
                placeholder="Enter your Password"
                id="password"
              />
            </div>
            <Button
              className="w-full  bg-gradient-to-r from-red-600 to-blue-600 "
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
