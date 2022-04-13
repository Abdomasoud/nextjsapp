import React from 'react';
import Head from 'next/head';
import Link from 'next/link';



export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props: {
            users: data,
        },
      }
}


const Users = ({users}) => {
    return (
        <>
        <Head>
            <title>users</title>
        </Head>
        <div>
            <h2>users page</h2>
            {users.map((skill)=>(
                <Link href={`/users/${skill.id}`} key={skill.id}>
                    <a>
                      <p>{skill.name}</p>
                    </a>
                </Link>
            ))}
        </div>
        </>
    );
}

export default Users;
