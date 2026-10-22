import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
export type UrlNullable = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullableSchema: Schema<UrlNullable> = s.object<UrlNullable>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
