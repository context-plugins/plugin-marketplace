import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url79Schema, type Url79 } from "./url79.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links63 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [customer](get-customer) that this mandate belongs to. */
  customer: Url79;
};

export const links63Schema: Schema<Links63> = s.object<Links63>({
  self: urlSchema,
  customer: url79Schema,
});
