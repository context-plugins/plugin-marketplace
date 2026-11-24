import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A note's agenda content in Fellow Markdown.
 *
 * Fellow Markdown is the editable format: what you read can be modified and written back as-is. It
 * is not the same format as the note object's read-only `content_markdown` field.
 */
export type NoteAgenda = {
  noteId: string;
  title: string | null;
  contentFellowMarkdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const noteAgendaSchema: Schema<NoteAgenda> = s.object<NoteAgenda>(
  {
    noteId: s.string(),
    title: s.nullable(s.string()),
    contentFellowMarkdown: s.string(),
    _keysMap: {
      noteId: "note_id",
      contentFellowMarkdown: "content_fellow_markdown",
    },
  },
  { additionalProperties: s.json() },
);
