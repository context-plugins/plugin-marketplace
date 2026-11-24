import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteAgendaSchema, type NoteAgenda } from "./note-agenda.js";

/** Response containing a note's agenda as Fellow Markdown. */
export type NoteAgendaResponse = {
  /**
   * A note's agenda content in Fellow Markdown.
   *
   * Fellow Markdown is the editable format: what you read can be modified and written back as-is.
   * It is not the same format as the note object's read-only `content_markdown` field.
   */
  agenda: NoteAgenda;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const noteAgendaResponseSchema: Schema<NoteAgendaResponse> = s.object<NoteAgendaResponse>(
  {
    agenda: noteAgendaSchema,
  },
  { additionalProperties: s.json() },
);
