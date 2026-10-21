import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [mandate](get-mandate) this subscription was created for. */
export type UrlNullable19 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable19Schema: Schema<UrlNullable19> = s.object<UrlNullable19>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
