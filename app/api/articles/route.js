import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get('http://localhost:1337/api/articles?populate=*', {
      headers: {
        'Accept': 'application/json'
      }
    })

    // Validate the response structure
    if (!response?.data?.data) {
      throw new Error('Invalid response structure from Strapi')
    }

    return NextResponse.json({
      data: response.data.data
    })
  } catch (error) {
    console.error('API Route Error:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}