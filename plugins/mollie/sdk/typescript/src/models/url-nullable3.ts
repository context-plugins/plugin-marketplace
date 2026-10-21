import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [invoice](list-invoices). */
export type UrlNullable3 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable3Schema: Schema<UrlNullable3> = s.object<UrlNullable3>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
