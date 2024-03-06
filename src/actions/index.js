// All the different functions we export from this file are used as server actions in the pages of our app.
'use server';
import {db} from '@/db';
import {redirect} from "next/navigation";

export async function editSnippet(id, code) {
  await db.snippet.update({
    where: {
      id: id,
    },
    data: {
      code: code,
    },
  });
  redirect(`/snippets/${id}`);
};

export async function deleteSnippet(id) {
  await db.snippet.delete({
    where: {
      id: id,
    },
  });
  redirect('/');
};

// An example of how to implement a server action in a component.
export async function createSnippet(formState, formData) {
  //  Get the user's input from the form data. Extract the form data.
  const title = formData.get('title');
  const code = formData.get('code');

  //   Check the user's input and make sure it's valid. Define server-side validations
  if (typeof title !== 'string' || title.length < 3) {
    return {
      message: 'Title must be at least 3 characters long',
    };
  }

  if (typeof code !== 'string' || code.length < 3) {
    return {
      message: 'Code must be at least 3 characters long',
    };
  }

  // //   If the input is valid, create a new snippet in the database.
let snippet;
  try {
    snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    //   If there's an error, return a message to the user.
    return {
      message: 'There was an error creating your snippet',
    };
  }
  //   If the snippet is created successfully, redirect the user to the new snippet's page.
  if (snippet) {
    // redirect(`/snippets/${snippet.id}`);
    redirect('/');
  }
}
