import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url6Schema, type Url6 } from "./url6.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links3 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** The API resource URL of the [payment](get-payment) that belong to this route. */
  payment: Url6;
};

export const links3Schema: Schema<Links3> = s.object<Links3>({
  self: urlSchema,
  payment: url6Schema,
});
