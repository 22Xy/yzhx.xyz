import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "posts", slug].join(":"))) ?? 0;

  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-900/95 to-zinc-900">
      <Header post={post} views={views} />
      <ReportView slug={post.slug} />

      <article className="px-4 pt-4 sm:pt-12 pb-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
