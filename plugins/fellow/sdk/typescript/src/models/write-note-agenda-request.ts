import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for writing a note's agenda and/or renaming the note. */
export type WriteNoteAgendaRequest = {
  /**
   * The full agenda body in Fellow Markdown, the same format the note object's
   * content_fellow_markdown field returns. When provided, replaces the existing agenda content.
   */
  contentFellowMarkdown?: string | null;
  /** New title for the note. When provided, renames the note. */
  title?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const writeNoteAgendaRequestSchema: Schema<WriteNoteAgendaRequest> = s.object<WriteNoteAgendaRequest>(
  {
    contentFellowMarkdown: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    _keysMap: {
      contentFellowMarkdown: "content_fellow_markdown",
    },
  },
  { additionalProperties: s.json() },
);
