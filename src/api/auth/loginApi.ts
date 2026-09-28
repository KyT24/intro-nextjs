import { LoginRequest } from "@/features/login/validation/loginSchema";
import axios from "axios";

export async function loginApi({email, password}: LoginRequest) {
  return await axios.post(
    'https://api.backendless.com/4E312A0A-D13E-450C-82C4-5C37CF684A2F/D43058E5-349C-4A7B-8B50-814787680071/users/login',
    { login: email, password },
  );
}