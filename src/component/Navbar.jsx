import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" className="text-lg font-semibold tracking-wide">
          User Management
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-gray-300 transition ${
                isActive ? "text-green-400 font-medium" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/UserAdd"
            className={({ isActive }) =>
              `hover:text-gray-300 transition ${
                isActive ? "text-green-400 font-medium" : ""
              }`
            }
          >
            Add User
          </NavLink>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <div className="flex flex-col gap-4 mt-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-gray-300 transition ${
                      isActive ? "text-green-400 font-medium" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/UserAdd"
                  className={({ isActive }) =>
                    `hover:text-gray-300 transition ${
                      isActive ? "text-green-400 font-medium" : ""
                    }`
                  }
                >
                  Add User
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
