import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The next set of items, if available. */
export type UrlNullable2 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable2Schema: Schema<UrlNullable2> = s.object<UrlNullable2>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
