import React from 'react'
import Profile from "../../img/profileImg.jpg";
import Cover from "../../img/cover.jpg"
import "./ProfileCard.css"
const ProfileCard = () => {

  const ProfilePage = true;


  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="Cover" />
        <img src={Profile} alt="Profile" />
      </div>

      <div className="ProfileName">
        <span>Jane doe</span>
        <span>Junior Backend Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,999</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Following</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl">

              </div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>
        My Profile
      </span>}

    </div>
  )
}

export default ProfileCard