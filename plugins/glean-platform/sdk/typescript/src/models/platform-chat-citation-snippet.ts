import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatCitationSnippet = {
  text: string;
  pageNumber?: number | null;
};

export const platformChatCitationSnippetSchema: Schema<PlatformChatCitationSnippet> =
  s.object<PlatformChatCitationSnippet>({
    text: s.string(),
    pageNumber: s.optionalNullable(s.int()),
    _keysMap: {
      pageNumber: "page_number",
    },
  });
