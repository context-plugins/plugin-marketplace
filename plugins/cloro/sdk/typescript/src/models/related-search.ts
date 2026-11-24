import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RelatedSearch = {
  /** Related search query */
  query?: string;
  /** Google search URL for the related query */
  link?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relatedSearchSchema: Schema<RelatedSearch> = s.object<RelatedSearch>(
  {
    query: s.optional(s.string()),
    link: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
