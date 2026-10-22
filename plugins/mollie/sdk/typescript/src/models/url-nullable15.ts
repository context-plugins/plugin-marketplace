import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [subscriptions](list-subscriptions) linked to this customer. Omitted
 * if no such subscriptions exist (yet).
 */
export type UrlNullable15 = {
  /** The actual URL string. */
  href?: string;
  /** The content type of the page or endpoint the URL points to. */
  type?: string;
};

export const urlNullable15Schema: Schema<UrlNullable15> = s.object<UrlNullable15>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
