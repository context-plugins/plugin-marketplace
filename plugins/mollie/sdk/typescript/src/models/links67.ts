import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url1Schema, type Url1 } from "./url1.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links67 = {
  /** The URL to the current set of items. */
  self: Url1;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation: Url;
};

export const links67Schema: Schema<Links67> = s.object<Links67>({
  self: url1Schema,
  documentation: urlSchema,
});
