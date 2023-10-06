import { ActionFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Link } from "react-router-dom";
import { db } from "~/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign Up : Authentications" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const user = await db.user.create({
    data: {
      name: data.get("name") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
    },
  });
  return json(user);
}

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-center my-5">Sign Up</h1>
        <Form method="POST" className="flex flex-col gap-3">
          <input
            type="name"
            placeholder="name"
            name="name"
            className="w-80 py-2 px-3 rounded-md border"
          />
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
          <Link to={"/login"} className="text-blue-500">
            Already have account login now
          </Link>
        </div>
      </div>
    </main>
  );
}
