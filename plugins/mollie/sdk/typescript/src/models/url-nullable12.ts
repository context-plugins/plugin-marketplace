import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [settlement](get-settlement) this chargeback has been settled with.
 * Not present if not yet settled.
 */
export type UrlNullable12 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable12Schema: Schema<UrlNullable12> = s.object<UrlNullable12>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
