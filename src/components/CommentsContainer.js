import React from "react";

const commentsData = [
  {
    name: "Ankit",
    text: "fjhgfjg djhdjghfj jhhgjrhgr",
    replies: [
      {
        name: "Ankit",
        text: "fjhgfjg djhdjghfj jhhgjrhgr",
        replies: [
          {
            name: "Ankit",
            text: "fjhgfjg djhdjghfj jhhgjrhgr",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit",
    text: "fjhgfjg djhdjghfj jhhgjrhgr",
    replies: [
      {
        name: "Ankit",
        text: "fjhgfjg djhdjghfj jhhgjrhgr",
        replies: [],
      },
    ],
  },
  {
    name: "Ankit",
    text: "fjhgfjg djhdjghfj jhhgjrhgr",
    replies: [],
  },
  {
    name: "Ankit",
    text: "fjhgfjg djhdjghfj jhhgjrhgr",
    replies: [
      {
        name: "Ankit",
        text: "fjhgfjg djhdjghfj jhhgjrhgr",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="data:image/png;base64,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"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // dont use index as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
