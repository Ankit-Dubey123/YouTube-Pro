import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-medium text-sm text-gray-500">{channelTitle}</li>
        <li className="font-serif font-light text-sm text-gray-500">
          {statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-2 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
