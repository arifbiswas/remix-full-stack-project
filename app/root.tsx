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
    <div className="container mx-auto ">
      <div className="flex flex-col justify-between min-h-[99vh]">
        <div>
          <h2 className="text-gray-500 text-1xl font-bold mt-3">
            <Link to={"/"}>মমতাজ এন্টারপ্রাইজ</Link>
          </h2>
          {props?.children}
        </div>
        <footer>
          <p className="text-center py-5 text-xs">
            Made by ARIF BISWAS and ©Copyright 2023, All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
