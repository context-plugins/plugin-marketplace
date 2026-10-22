import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no such
 * mandates exist (yet).
 */
export type UrlNullable14 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable14Schema: Schema<UrlNullable14> = s.object<UrlNullable14>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
