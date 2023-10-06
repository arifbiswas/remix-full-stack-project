import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

export function Layout(props: any) {
  return (
    <div className="container mx-auto">
      <nav className="py-1 md:py-5 px-10 sm:px-5 flex flex-col sm:flex-row justify-between">
        <Link to={"/"} className="text-2xl font-black">
          Dashboard
        </Link>
        <div className="flex gap-6 ">
          <Link to={"/login"} className="text-base font-semibold">
            Login
          </Link>
          <Link to={"/signup"} className="text-base font-semibold">
            Sign Up
          </Link>
        </div>
      </nav>
      {props?.children}
    </div>
  );
}
