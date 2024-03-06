import {db} from '@/db';
import Link from 'next/link';


export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
    <Link
    key={snippet.id}
    className="flex justify-between items-center p-2 border rounded"
    href={`/snippets/${snippet.id}`}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
    );
  });


  return (
  <div>
    <div className="flex m-2 justify-between items-center">
      <h1 className="text-xl font-bold">Snippets</h1>
      <Link className= "border rounded p-2" href="/snippets/new">Create a Snippet</Link>
    </div>
    <div className="flex flex-col gap-2"> {renderedSnippets}</div>


  </div>
  );
}



