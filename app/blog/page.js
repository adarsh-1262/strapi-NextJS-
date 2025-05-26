import React from 'react'
import Link from 'next/link'

const data = await fetch("http://localhost:1337/api/articles?populate=*")
const response = await data.json()

console.log(response)

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.data.map((data, index) => {
          return (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                <Link href={`/blogpost/${data.slug}`}>{data.title}</Link></h2> 
              <p className="text-gray-600 mb-3">{data.description}</p>
              <div className="text-sm text-gray-500">
                <p><strong>Date:</strong> {new Date(data.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
