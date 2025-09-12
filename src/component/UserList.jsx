import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../Context/UserContext.jsx"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button.jsx"
import { Badge } from "@/components/ui/badge.jsx"

const UsersList = () => {
  const { user, setUser, setEditUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    const delet = user.filter((item) => item.id !== id)
    if (id > 0) {
      if (window.confirm(`Sure to delete User ${id}?`)) {
        setUser(delet)
      }
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

      {/* Table */}
      <div className="rounded-lg border shadow-sm bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Email</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Mobile Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.status === "Active" ? "success" : "secondary"}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button
                    className="bg-green-600 hover:bg-green-700 rounded"
                    onClick={() => setEditUser(item)}
                  >
                    <Link to="/UserAdd" className="text-white no-underline">
                      Edit
                    </Link>
                  </Button>
                  <Button
                    className="bg-red-600 hover:bg-red-700 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add User button */}
      <div className="mt-4">
        <Button className='bg-green-600 hover:bg-green-700'>
          <Link to="/UserAdd">+ Add User</Link>
        </Button>
      </div>
    </div>
  )
}

export default UsersList
