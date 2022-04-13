import React from 'react';


export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(user=>{
        return{
            params: {id: user.id.toString()}
        }
    })

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return{
        props: {user: data}
    }

}

const Details = ({ user }) => {
    return (
        <div>
            <h1>selected user info</h1>
            <p>User Name is: {user.name}</p>
            {/* <p>User username is: {user.address.zipcode}</p> */}
            <p>User Email is: {user.email}</p>
            <p>User Website is:<a href="">{user.website}</a></p>
        </div>
    );
}

export default Details;
