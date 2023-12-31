"use client";
import { format, parseISO } from "date-fns";
import { allPosts } from "@/.contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

// export async function generateStaticParams() {
//    return [{ slug: 'change-me' }, { slug: 'click-me' }]
// }
// export const generateStaticParams = async () => {
//   //  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
//   return allPosts.map((post) => ({ slug: post.url }));
// };

// export const generateStaticParams = async () =>
// export const generateMetadata = ({ params } : { params: { slug: string }}) => {
//   const post = allPosts.find((post) => post.url === params.slug)
//   return { title: post?.title }
// }

const PostLayout = ({ params }: { params: { slug: string } }) => {
  console.log("sluggggggggggggggggggg : " + params.slug);
  // generateStaticParams.forEach((element) => {
  // });

  // generateStaticParams().then((result) => {
  //   console.log("AAAAAAAAAAAAAAAAAAA" + result[0].slug); // 24
  // });

  // const post = allPosts.find((post) => post._raw.flattenedPath == params.slug);
  const post = allPosts.find((post) => post.url == params.slug);
  if (!post) {
    return (
      <>
        <div> {params.slug}</div>
        <ul>
          {allPosts.map((post) => (
            <li key={post.url}>{post.url}</li>
          ))}
        </ul>
      </>
    );
  }
  const Content = getMDXComponent(post?.body.code);

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post?.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
