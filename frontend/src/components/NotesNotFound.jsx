import { NotebookIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 max-w-7xl mx-auto text-center">
        <div className="bg-primary/10 p-6 rounded-full mb-4">
        <NotebookIcon className="size-12 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-base-content">No Notes Found</h2>
        <p className="text-base-content/70">You haven't created any notes yet. Start by creating a new note!</p>
        <Link to="/create" className="mt-4 btn btn-primary">Create Note</Link>
    </div>
  )
}

export default NotesNotFound