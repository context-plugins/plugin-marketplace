import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { url41Schema, type Url41 } from "./url41.js";
import { url42Schema, type Url42 } from "./url42.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links53 = {
  /** URL to the current invoice resource. */
  self?: Url41;
  /** URL to a downloadable PDF of the invoice. */
  pdf?: Url42;
};

export const links53Schema: Schema<Links53> = s.object<Links53>({
  self: s.optional(s.lazy(() => url41Schema)),
  pdf: s.optional(s.lazy(() => url42Schema)),
});
