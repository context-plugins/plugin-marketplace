import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fullContentSchema, type FullContent } from "./unions/full-content.js";
import { publishDateSchema, type PublishDate } from "./unions/publish-date.js";
import { titleSchema, type Title } from "./unions/title.js";

/** Extract result for a single URL. */
export type V1ExtractResult = {
  /** URL associated with the search result. */
  url: string;
  /** Title of the webpage, if available. */
  title?: Title;
  /** Publish date of the webpage in YYYY-MM-DD format, if available. */
  publishDate?: PublishDate;
  /** Relevant excerpted content from the URL, formatted as markdown. */
  excerpts: string[];
  /** Full content from the URL formatted as markdown, if requested. */
  fullContent?: FullContent;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ExtractResultSchema: Schema<V1ExtractResult> = s.object<V1ExtractResult>(
  {
    url: s.string(),
    title: s.optional(s.lazy(() => titleSchema)),
    publishDate: s.optional(s.lazy(() => publishDateSchema)),
    excerpts: s.array(s.string()),
    fullContent: s.optional(s.lazy(() => fullContentSchema)),
    _keysMap: {
      publishDate: "publish_date",
      fullContent: "full_content",
    },
  },
  { additionalProperties: s.json() },
);
