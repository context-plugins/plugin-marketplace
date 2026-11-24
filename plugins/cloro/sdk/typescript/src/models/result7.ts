import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsResultSchema, type NewsResult } from "./news-result.js";

/** Google News results data */
export type Result7 = {
  /** News articles from Google News */
  newsResults?: NewsResult[];
  /** Raw HTML from Google News pages (if requested) */
  html?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result7Properties: s.Shape<Result7> = {
  newsResults: s.optional(s.array(s.lazy(() => newsResultSchema))),
  html: s.optional(s.array(s.string())),
};

export const result7InternalSchema: Schema<Result7> = s.object<Result7>(result7Properties, {
  additionalProperties: s.json(),
});

export const result7Schema: Schema<Result7> = s.lazySchema(() =>
  s.object<Result7>(
    {
      ...result7Properties,
      html: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
