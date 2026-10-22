import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [payments](list-payments) created for this subscription. Omitted if
 * no such payments exist (yet).
 */
export type UrlNullable20 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable20Schema: Schema<UrlNullable20> = s.object<UrlNullable20>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
