import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginatedResponseNoteSchema, type PaginatedResponseNote } from "./paginated-response-note.js";

/** Response containing a paginated list of notes. */
export type NotesListResponse = {
  notes: PaginatedResponseNote;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notesListResponseSchema: Schema<NotesListResponse> = s.object<NotesListResponse>(
  {
    notes: paginatedResponseNoteSchema,
  },
  { additionalProperties: s.json() },
);
