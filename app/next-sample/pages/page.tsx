import { Router, useRouter } from "next/router"
import { useEffect } from "react"


const Page = () => {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/posts/1')  
  })

  return <span>{router.pathname}</span>
}

export default Page
