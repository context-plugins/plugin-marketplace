import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supportingWebsiteSchema, type SupportingWebsite } from "./supporting-website.js";

/** Rating source information */
export type RatingGroupedCitation1 = {
  /** Source title */
  title?: string;
  /** Source URL */
  url?: string;
  /** Array of supporting website references */
  supportingWebsites?: SupportingWebsite[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ratingGroupedCitation1Schema: Schema<RatingGroupedCitation1> = s.object<RatingGroupedCitation1>(
  {
    title: s.optional(s.string()),
    url: s.optional(s.string()),
    supportingWebsites: s.optional(s.array(s.lazy(() => supportingWebsiteSchema))),
    _keysMap: {
      supportingWebsites: "supporting_websites",
    },
  },
  { additionalProperties: s.json() },
);
