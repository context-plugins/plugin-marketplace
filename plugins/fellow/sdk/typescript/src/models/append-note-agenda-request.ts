import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for appending Fellow Markdown to the end of a note's agenda. */
export type AppendNoteAgendaRequest = {
  /**
   * Fellow Markdown to add at the end of the agenda, in the same format the note object's
   * content_fellow_markdown field returns.
   */
  contentFellowMarkdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appendNoteAgendaRequestSchema: Schema<AppendNoteAgendaRequest> =
  s.object<AppendNoteAgendaRequest>(
    {
      contentFellowMarkdown: s.string(),
      _keysMap: {
        contentFellowMarkdown: "content_fellow_markdown",
      },
    },
    { additionalProperties: s.json() },
  );
