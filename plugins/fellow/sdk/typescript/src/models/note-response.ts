import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteSchema, type Note } from "./note.js";

/** Response containing a single note. */
export type NoteResponse = {
  note: Note;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const noteResponseSchema: Schema<NoteResponse> = s.object<NoteResponse>(
  {
    note: noteSchema,
  },
  { additionalProperties: s.json() },
);
