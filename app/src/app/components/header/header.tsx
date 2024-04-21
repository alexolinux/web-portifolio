import Image from "next/image"
import "./header.scss"

export function Header(){
  return(
    <div className="header">
      <div>
          <h1>Alex Mendes</h1>
          <h2>Cloud/Devops Engineer</h2>
      </div>

      <Image
        src="/me.jpg"
        alt="Vercel Logo"
        width={325}
        height={325}
        priority
      />
      
    </div>
  )
}
