import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [payments](list-payments) linked to this customer. Omitted if no such
 * payments exist (yet).
 */
export type UrlNullable13 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable13Schema: Schema<UrlNullable13> = s.object<UrlNullable13>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
