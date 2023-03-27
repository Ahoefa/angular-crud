export type Comment = {
  content: string;
};

export type Post = {
  title: string;
  id: number;
  comments?: Comment[];
};
