import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatCitationSnippetSchema, type ChatCitationSnippet } from "./chat-citation-snippet.js";
import { chatCitationSourceSchema, type ChatCitationSource } from "./unions/chat-citation-source.js";

export type ChatCitationAnnotation = {
  /** @default "CITATION" */
  type?: "CITATION";
  sources: ChatCitationSource[];
  startIndex?: number | null;
  endIndex?: number | null;
  snippets?: ChatCitationSnippet[] | null;
};

export const chatCitationAnnotationSchema: Schema<ChatCitationAnnotation> = s.object<ChatCitationAnnotation>({
  type: s.defaulted(s.literal("CITATION"), "CITATION"),
  sources: s.array(s.lazy(() => chatCitationSourceSchema)),
  startIndex: s.optionalNullable(s.int()),
  endIndex: s.optionalNullable(s.int()),
  snippets: s.optionalNullable(s.array(s.lazy(() => chatCitationSnippetSchema))),
  _keysMap: {
    startIndex: "start_index",
    endIndex: "end_index",
  },
});
