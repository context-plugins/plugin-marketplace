import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlNullable1Schema, type UrlNullable1 } from "./url-nullable1.js";
import { urlNullable2Schema, type UrlNullable2 } from "./url-nullable2.js";
import { urlSchema, type Url } from "./url.js";
import { url1Schema, type Url1 } from "./url1.js";

/**
 * Links to help navigate through the lists of items. Every URL object will contain an `href` and a
 * `type` field.
 */
export type ListLinks = {
  /** The URL to the current set of items. */
  self: Url1;
  /** The previous set of items, if available. */
  previous: UrlNullable1 | null;
  /** The next set of items, if available. */
  next: UrlNullable2 | null;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation: Url;
};

export const listLinksSchema: Schema<ListLinks> = s.object<ListLinks>({
  self: url1Schema,
  previous: s.nullable(s.lazy(() => urlNullable1Schema)),
  next: s.nullable(s.lazy(() => urlNullable2Schema)),
  documentation: urlSchema,
});
