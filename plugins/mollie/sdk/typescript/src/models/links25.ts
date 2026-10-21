import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { url65Schema, type Url65 } from "./url65.js";
import { url66Schema, type Url66 } from "./url66.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links25 = {
  /** The URL to the current resource. */
  self: Url65;
  /** The URL to the documentation of the current resource. */
  documentation: Url66;
};

export const links25Schema: Schema<Links25> = s.object<Links25>({
  self: url65Schema,
  documentation: url66Schema,
});
