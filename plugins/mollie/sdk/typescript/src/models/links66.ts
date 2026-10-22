import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { url65Schema, type Url65 } from "./url65.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links66 = {
  /** The URL to the current resource. */
  self: Url65;
};

export const links66Schema: Schema<Links66> = s.object<Links66>({
  self: url65Schema,
});
