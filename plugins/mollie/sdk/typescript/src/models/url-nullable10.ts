import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not
 * present if not yet settled.
 */
export type UrlNullable10 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable10Schema: Schema<UrlNullable10> = s.object<UrlNullable10>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
