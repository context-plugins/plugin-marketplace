import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Rating source information with supporting websites */
export type RatingGroupedCitation = {
  /** Source title */
  title?: string;
  /** Source URL */
  url?: string;
  /** Array of supporting website references */
  supportingWebsites?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ratingGroupedCitationSchema: Schema<RatingGroupedCitation> = s.object<RatingGroupedCitation>(
  {
    title: s.optional(s.string()),
    url: s.optional(s.string()),
    supportingWebsites: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      supportingWebsites: "supporting_websites",
    },
  },
  { additionalProperties: s.json() },
);
