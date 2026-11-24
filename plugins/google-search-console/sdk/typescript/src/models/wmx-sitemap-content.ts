import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Information about the various content types in the sitemap. */
export type WmxSitemapContent = {
  /** The number of URLs in the sitemap (of the content type). */
  submitted?: string;
  /**
   * *Deprecated; do not use.*
   *
   * @deprecated
   */
  indexed?: string;
  /** The specific type of content in this sitemap. For example: `web`. */
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wmxSitemapContentSchema: Schema<WmxSitemapContent> = s.object<WmxSitemapContent>(
  {
    submitted: s.optional(s.string()),
    indexed: s.optional(s.string()),
    type: s.optional(s.lazy(() => type1Schema)),
  },
  { additionalProperties: s.json() },
);
