'use client';
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from '@/actions/index';

export default function SnippetEditForm({snippet}) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
  <div>
    <Editor
    className="mt-20"
    height="40vh"
    theme="vs-dark"
    defaultLanguage="javascript"
    defaultValue={snippet.code}
    options={{padding: {top: 20}, minimap: {enabled: false}}}
    onChange={handleEditorChange} />
    <form action={editSnippetAction}>
      <button type="submit" className="rounded p-2 bg-blue-200 mt-3">Save</button>
    </form>
  </div>
  );
}