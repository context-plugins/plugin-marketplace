import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Article details keyed by article ID for articles related to the event. */
export type SignalArticlePartialDto = {
  /** Article headline. */
  title?: string | null;
  /** Canonical URL of the article. */
  url?: string | null;
  /** Publisher domain for the article. */
  domain?: string | null;
  /** Article publication date supplied with the monitor result. */
  pubDate?: string | null;
  /** URL of the publisher's favicon. */
  sourceFavicon?: string | null;
  /** Matched text snippets grouped by article field. */
  highlights?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalArticlePartialDtoSchema: Schema<SignalArticlePartialDto> =
  s.object<SignalArticlePartialDto>(
    {
      title: s.optionalNullable(s.string()),
      url: s.optionalNullable(s.string()),
      domain: s.optionalNullable(s.string()),
      pubDate: s.optionalNullable(s.string()),
      sourceFavicon: s.optionalNullable(s.string()),
      highlights: s.optionalNullable(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
