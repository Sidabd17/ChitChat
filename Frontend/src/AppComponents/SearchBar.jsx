import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
   <div className="px-4 bg-purple-100 flex items-center rounded-lg mb-4">
    <Search className="inline-block mr-2" />
    <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-lg border-none bg-transparent outline-none focus:outline-none focus:ring-0 placeholder:text-slate-600"
    />
    </div>
  )
}

export default SearchBar
