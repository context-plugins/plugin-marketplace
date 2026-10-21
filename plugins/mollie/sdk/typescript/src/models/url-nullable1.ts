import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The previous set of items, if available. */
export type UrlNullable1 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable1Schema: Schema<UrlNullable1> = s.object<UrlNullable1>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
