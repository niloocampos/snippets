'use client';
import { useFormState } from 'react-dom';
import * as actions from '@/actions/index';


export default function SnippetCreatePage() {
  // pass your server action as the first argument to useFormState and the second argument is the initial state of the form
  const [formState, action] = useFormState(actions.createSnippet, { message: '',});


  return (
  <form action={action}>
    <h3 className="font-bold m-3">Create a Snippet</h3>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <label className="w-12" htmlFor="title">Title</label>
        <input
        className="border rounded p-2 w-full"
        type="text"
        id="title"
        name="title"/>
      </div>

      <div className="flex gap-4">
        <label className="w-12" htmlFor="title">Code</label>
        <textarea
        className="border rounded p-2 w-full"
        id="code"
        name="code"/>
      </div>
      {formState.message && <div className="my-2 p-2 bg-red-200 border border-red-400 rounded">{formState.message}</div>}

      <button type="submit" className="rounded p-2 bg-blue-200">Create</button>
    </div>
  </form>
  );
}

