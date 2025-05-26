'use client'; // Required if using Next.js app directory with client component

import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownHTML = ({ markdown }) => {
  return (
    <div className="prose lg:prose-xl max-w-none prose-blue dark:prose-invert">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default MarkdownHTML
