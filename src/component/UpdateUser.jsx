import React, { useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import UserContext from "../Context/UserContext.jsx"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const UpdateUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const { user, setUser, editUser, setEditUser } = useContext(UserContext)

  useEffect(() => {
    if (editUser) {
      setValue("mobile", editUser.mobile)
      setValue("firstName", editUser.firstName)
      setValue("lastName", editUser.lastName)
      setValue("email", editUser.email)
      setValue("status", editUser.status)
    } else {
      reset()
    }
  }, [editUser, reset, setValue])

  const onSubmit = (formData) => {
    if (editUser) {
      // Update user
      const updateData = user.map((item) =>
        item.id === editUser.id
          ? {
              ...item,
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              mobile: formData.mobile,
              status: formData.status,
            }
          : item
      )
      setUser(updateData)
      setEditUser(null)
    } else {
      // Add new user
      const newUser = {
        id: user.length + 1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        status: formData.status,
      }
      setUser([...user, newUser])
    }
    reset()
    navigate("/")
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">
        {editUser ? "Update User" : "Add User"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            placeholder="Enter first name"
          />
          {errors.firstName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            disabled={editUser} // cannot edit email on update
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <Label>Status</Label>
          <Select
            defaultValue={editUser?.status || "Active"}
            onValueChange={(value) => setValue("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mobile */}
        <div>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter 10 digit mobile"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be 10 digits",
              },
            })}
          />
          {errors.mobile && (
            <p className="text-sm text-red-500 mt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            className="bg-green-600 hover:bg-green-700"
            type="submit"
          >
            {editUser ? "Update" : "Save"}
          </Button>
          <Button
            variant="destructive"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser
