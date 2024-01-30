import Image from "next/image";
import {auth} from "@/auth"
import {google} from "googleapis" 

export default async function Home() {
  const session = await auth()
  console.log(session);

  const handleUpload = async () => {
    const testAuth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    )

    testAuth.setCredentials({
    })
  }
  
  
  return (
    <div>
      {session?.user ? (<div>user is {session.user.email} there</div>) : (<div>NOt loged in</div>)}

    </div>
  );
}
