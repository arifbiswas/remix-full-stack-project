import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "Login : Authentications" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-center my-5">Login</h1>
        <Form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="email"
            name="email"
            className="w-80 py-2 px-3 rounded-md border"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="w-80 py-2 px-3 rounded-md border"
          />
          <input
            type="submit"
            className="w-80 py-2 px-3 bg-gray-200 rounded-md"
            value="Submit"
          />
        </Form>
        <div className="my-6 flex justify-end">
          <Link to={"/signup"} className="text-blue-500">
            create new account
          </Link>
        </div>
      </div>
    </main>
  );
}
