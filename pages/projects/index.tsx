import Container from 'components/Container';
import { InferGetStaticPropsType } from 'next';
import { allSnippetsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Snippet } from 'lib/types';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Projects – Mikołaj Sodzawiczny"
      description="There's nothing here yet because well, I am busy at my day job but I have some interesting ideas for the future"
    >
      <div className="flex flex-col items-start justify-start max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-green-leaf">Loading...</p>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const snippets: Snippet[] = await getClient(preview).fetch(allSnippetsQuery);

  return { props: { snippets } };
}
