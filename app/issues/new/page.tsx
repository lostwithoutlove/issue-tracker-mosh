"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";

const NewIssuesPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issues</Button>
    </div>
  );
};

export default NewIssuesPage;