import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publishDateSchema, type PublishDate } from "./unions/publish-date.js";
import { titleSchema, type Title } from "./unions/title.js";

/** A single search result from the web search API. */
export type V1WebSearchResult = {
  /** URL associated with the search result. */
  url: string;
  /** Title of the webpage, if available. */
  title?: Title;
  /** Publish date of the webpage in YYYY-MM-DD format, if available. */
  publishDate?: PublishDate;
  /** Relevant excerpted content from the URL, formatted as markdown. */
  excerpts: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebSearchResultSchema: Schema<V1WebSearchResult> = s.object<V1WebSearchResult>(
  {
    url: s.string(),
    title: s.optional(s.lazy(() => titleSchema)),
    publishDate: s.optional(s.lazy(() => publishDateSchema)),
    excerpts: s.array(s.string()),
    _keysMap: {
      publishDate: "publish_date",
    },
  },
  { additionalProperties: s.json() },
);
