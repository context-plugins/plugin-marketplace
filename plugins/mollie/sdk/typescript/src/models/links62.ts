import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable13Schema, type UrlNullable13 } from "./url-nullable13.js";
import { urlNullable14Schema, type UrlNullable14 } from "./url-nullable14.js";
import { urlNullable15Schema, type UrlNullable15 } from "./url-nullable15.js";
import { urlSchema, type Url } from "./url.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links62 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  dashboard: Url;
  /**
   * The API resource URL of the [payments](list-payments) linked to this customer. Omitted if no
   * such payments exist (yet).
   */
  payments?: UrlNullable13 | null;
  /**
   * The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no
   * such mandates exist (yet).
   */
  mandates?: UrlNullable14 | null;
  /**
   * The API resource URL of the [subscriptions](list-subscriptions) linked to this customer.
   * Omitted if no such subscriptions exist (yet).
   */
  subscriptions?: UrlNullable15 | null;
};

export const links62Schema: Schema<Links62> = s.object<Links62>({
  self: urlSchema,
  dashboard: urlSchema,
  payments: s.optionalNullable(s.lazy(() => urlNullable13Schema)),
  mandates: s.optionalNullable(s.lazy(() => urlNullable14Schema)),
  subscriptions: s.optionalNullable(s.lazy(() => urlNullable15Schema)),
});
