import { useContext } from "react";
import { UserContext } from "@utils/useUser";
import Head from 'next/head'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Layout from '@components/Layout';

export default function First() {

  const user = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Admin - First</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Layout>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen">

          <section className="text-gray-600 body-font py-8">
            <h1 className="text-center font-medium text-3xl dark:text-white mb-4">Admin First</h1>
            <h1 className="text-center font-medium text-xl dark:text-white mb-4">Protected using Middleware</h1>
            <h1 className="text-center font-medium text-xl dark:text-white">Username : {user?.username}</h1>
            <h1 className="text-center font-medium text-sm dark:text-white break-all">Token : {user?.token}</h1>
          </section>

        </main>

        <Footer />

      </Layout>

    </>
  )
}