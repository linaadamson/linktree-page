// STYLES
import './ProfileSection.css'

// ASSETS
import girl from "../assets/girl.jpg";

export default function ProfileSection() {
  return (
    <div id='profile_section'>
      <img id='profile_img' src={girl}/>
      <h4 id='twitter' >@Linadamson</h4>
      {false && <p id='slack'>Lina</p>}
    </div>
  )
}
