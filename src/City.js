import React from 'react';

export default function City({ skylineId, waterfrontId, castleId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img className="image" src={`castle-${castleId}.jpeg`}/>
      <img className="image" src={`skyline-${skylineId}.jpeg`}/>
      <img className="image" src={`waterfront-${waterfrontId}.jpeg`}/>
    </div>
  );
}
