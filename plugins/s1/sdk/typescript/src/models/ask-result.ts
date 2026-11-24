import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AskResult = {
  title: string;
  link: string;
  snippet: string;
  /**
   * When the page was published, as ISO 8601 (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SSZ`). Omitted when
   * the engine exposes no date.
   */
  publishedDate?: string;
  /** Engine that returned the result. */
  source: string;
  /**
   * How likely the result is to be about the query, two decimals. Only results scoring at least 0.5
   * are returned.
   */
  relevance: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const askResultProperties: s.Shape<AskResult> = {
  title: s.string(),
  link: s.string(),
  snippet: s.string(),
  publishedDate: s.optional(s.string()),
  source: s.string(),
  relevance: s.float64(),
  _keysMap: {
    publishedDate: "published_date",
  },
};

export const askResultInternalSchema: Schema<AskResult> = s.object<AskResult>(askResultProperties, {
  additionalProperties: s.json(),
});

export const askResultSchema: Schema<AskResult> = s.lazySchema(() =>
  s.object<AskResult>(
    {
      ...askResultProperties,
      link: s.string().check(s.url()),
      relevance: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
