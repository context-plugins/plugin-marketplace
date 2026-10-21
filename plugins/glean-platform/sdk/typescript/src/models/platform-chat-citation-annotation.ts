import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatCitationSnippetSchema,
  type PlatformChatCitationSnippet,
} from "./platform-chat-citation-snippet.js";
import {
  platformChatCitationSourceSchema,
  type PlatformChatCitationSource,
} from "./unions/platform-chat-citation-source.js";

export type PlatformChatCitationAnnotation = {
  /** @default "CITATION" */
  type?: "CITATION";
  sources: PlatformChatCitationSource[];
  startIndex?: number | null;
  endIndex?: number | null;
  snippets?: PlatformChatCitationSnippet[] | null;
};

export const platformChatCitationAnnotationSchema: Schema<PlatformChatCitationAnnotation> =
  s.object<PlatformChatCitationAnnotation>({
    type: s.defaulted(s.literal("CITATION"), "CITATION"),
    sources: s.array(s.lazy(() => platformChatCitationSourceSchema)),
    startIndex: s.optionalNullable(s.int()),
    endIndex: s.optionalNullable(s.int()),
    snippets: s.optionalNullable(s.array(s.lazy(() => platformChatCitationSnippetSchema))),
    _keysMap: {
      startIndex: "start_index",
      endIndex: "end_index",
    },
  });
