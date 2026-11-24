import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for replacing a single occurrence of text in a note's agenda. */
export type FindReplaceNoteAgendaRequest = {
  /** Existing agenda text to replace. Must appear exactly once, or the request is rejected. */
  find: string;
  /**
   * Fellow Markdown to substitute for the matched text, in the same format the note object's
   * content_fellow_markdown field returns. An empty string deletes the matched text.
   */
  contentFellowMarkdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const findReplaceNoteAgendaRequestProperties: s.Shape<FindReplaceNoteAgendaRequest> = {
  find: s.string(),
  contentFellowMarkdown: s.string(),
  _keysMap: {
    contentFellowMarkdown: "content_fellow_markdown",
  },
};

export const findReplaceNoteAgendaRequestInternalSchema: Schema<FindReplaceNoteAgendaRequest> =
  s.object<FindReplaceNoteAgendaRequest>(findReplaceNoteAgendaRequestProperties, {
    additionalProperties: s.json(),
  });

export const findReplaceNoteAgendaRequestSchema: Schema<FindReplaceNoteAgendaRequest> = s.lazySchema(() =>
  s.object<FindReplaceNoteAgendaRequest>(
    {
      ...findReplaceNoteAgendaRequestProperties,
      find: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
