import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url78Schema, type Url78 } from "./url78.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links40 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /** A link to the profile resource that the terminal will be paired with. */
  profile: Url78;
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  documentation: Url;
};

export const links40Schema: Schema<Links40> = s.object<Links40>({
  self: urlSchema,
  profile: url78Schema,
  documentation: urlSchema,
});
