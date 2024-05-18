import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import registerImg from "../assets/Sign up-bro.svg";
import { NavLink } from "react-router-dom";
import { GrSchedulePlay } from "react-icons/gr";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

type counselor = {
  id: number;
  value: string;
  label: string;
};

const counselorTypes: counselor[] = [
  { id: 1, value: "marriage-and-family", label: "Marriage & Family Counselor" },
  { id: 2, value: "mental-health", label: "Mental Health Counselor" },
  { id: 3, value: "school", label: "School Counselor" },
  { id: 4, value: "career", label: "Career Counselor" },
  { id: 5, value: "rehabilitation", label: "Rehabilitation Counselor" },
  { id: 6, value: "substance-abuse", label: "Legal Counselor" },
  { id: 9, value: "educational", label: "Educational Counselor" },
];

function Register() {
  const [hide, setHide] = useState("password");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [counselortype, setCounselorType] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleHidePassword = () => {
    setHide(hide === "password" ? "text" : "password");
  };

  return (
    <section className="flex flex-col lg:flex-row w-full ">
      <div className="w-full lg:w-1/2 px-20 py-16 ">
        <div className="w-full">
          <NavLink to="/" className="flex items-center justify-start gap-2">
            <GrSchedulePlay className="text-brightred w-6 h-6" />
            <h1 className="text-2xl text-darkblue font-bold tracking-widest">
              FindYourGuide
            </h1>
          </NavLink>
        </div>
        <Card className="border-none w-full shadow-none bg-transparent">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>to access our dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                    id="fname"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                    id="lname"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    type="text"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="user">User type</Label>
                  <Select onValueChange={(val) => setUser(val)}>
                    <SelectTrigger id="user">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="counselor">Counselor</SelectItem>
                      <SelectItem value="counselee">
                        Counselee(Client)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {user == "counselor" && (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="counselor">Counselor type</Label>
                    <Select onValueChange={(val) => setCounselorType(val)}>
                      <SelectTrigger id="counselor">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {counselorTypes.map((counselor: counselor) => (
                          <SelectItem
                            key={counselor.id}
                            value={counselor.value}
                          >
                            {counselor.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      type={hide}
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {hide == "password" ? (
                      <AiFillEyeInvisible
                        className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                        onClick={handleHidePassword}
                      />
                    ) : (
                      <AiFillEye
                        className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                        onClick={handleHidePassword}
                      />
                    )}
                  </div>

                  {password.length == 0 ? (
                    <p className="text-sm flex gap-1 text-gray-400">
                      Your password must be 8 characters or more.
                    </p>
                  ) : password.length < 8 ? (
                    <p className="text-sm flex gap-1 text-brightred">
                      <MdError className="w-4 h-4 text-brightred" />
                      Your password must be 8 characters or more.
                    </p>
                  ) : (
                    <p className="text-sm flex gap-1 text-green-400">
                      <IoCheckmarkCircle className="w-4 h-4 text-green-400" />
                      Valid Password
                    </p>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="w-full flex flex-col items-start">
            <Button className="w-full bg-brightred">Register</Button>
            <div className="flex gap-1 mt-2">
              <p className="text-sm text-start text-gray-500">
                Do you already have an account?
              </p>
              <NavLink to="/login" className="text-brightred underline text-sm">
                Login
              </NavLink>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 bg-brightred bg-opacity-5">
        <img src={registerImg} alt="Register hero image" className="w-[70%]" />
      </div>
    </section>
  );
}

export default Register;