import toast from "react-hot-toast"

const Footer = () => {
  
  const handleSubcribe = () =>{
    toast.error("Feature coming soon");
  }
  return (
    // FOOTER component
    <footer>
      <div className="banner">
        <div className="title">
          <h1>JO&apos;s</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="Email"/>
            <button onClick={handleSubcribe}>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer