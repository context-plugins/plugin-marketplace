import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsResult1Schema, type NewsResult1 } from "./news-result1.js";

/** Google News results data */
export type Result11 = {
  /** News articles from Google News */
  newsResults?: NewsResult1[];
  /** Raw HTML from Google News pages (if requested) */
  html?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result11Properties: s.Shape<Result11> = {
  newsResults: s.optional(s.array(s.lazy(() => newsResult1Schema))),
  html: s.optional(s.array(s.string())),
};

export const result11InternalSchema: Schema<Result11> = s.object<Result11>(result11Properties, {
  additionalProperties: s.json(),
});

export const result11Schema: Schema<Result11> = s.lazySchema(() =>
  s.object<Result11>(
    {
      ...result11Properties,
      html: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
