import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProductCitation = {
  title?: string;
  url?: string;
  /** Short extract of the page */
  snippet?: string;
  /** Publication date of the page */
  pubDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productCitationSchema: Schema<ProductCitation> = s.object<ProductCitation>(
  {
    title: s.optional(s.string()),
    url: s.optional(s.string()),
    snippet: s.optional(s.string()),
    pubDate: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
