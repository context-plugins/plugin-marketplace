import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatCitationSnippet = {
  text: string;
  pageNumber?: number | null;
};

export const chatCitationSnippetSchema: Schema<ChatCitationSnippet> = s.object<ChatCitationSnippet>({
  text: s.string(),
  pageNumber: s.optionalNullable(s.int()),
  _keysMap: {
    pageNumber: "page_number",
  },
});
