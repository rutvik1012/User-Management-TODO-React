import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const UserListTwo = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6">User List</h1>

        {/* Card-like wrapper */}
        <div className="bg-white rounded-2xl shadow-md border p-6">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Title</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Ajay</TableCell>
                <TableCell>React.js</TableCell>
                <TableCell>Frontend</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rutvik</TableCell>
                <TableCell>Node.js</TableCell>
                <TableCell>Backend</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default UserListTwo
