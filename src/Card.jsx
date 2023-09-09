import React from "react";
const title =  "this title"
const card = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-4">
      <div class="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
