import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for prepending Fellow Markdown to the start of a note's agenda. */
export type PrependNoteAgendaRequest = {
  /**
   * Fellow Markdown to add at the start of the agenda, in the same format the note object's
   * content_fellow_markdown field returns.
   */
  contentFellowMarkdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prependNoteAgendaRequestSchema: Schema<PrependNoteAgendaRequest> =
  s.object<PrependNoteAgendaRequest>(
    {
      contentFellowMarkdown: s.string(),
      _keysMap: {
        contentFellowMarkdown: "content_fellow_markdown",
      },
    },
    { additionalProperties: s.json() },
  );
