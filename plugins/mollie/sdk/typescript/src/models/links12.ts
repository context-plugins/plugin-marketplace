import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { url41Schema, type Url41 } from "./url41.js";
import { url42Schema, type Url42 } from "./url42.js";
import { url43Schema, type Url43 } from "./url43.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links12 = {
  /** URL to the current invoice resource. */
  self?: Url41;
  /** URL to a downloadable PDF of the invoice. */
  pdf?: Url42;
  /** URL to the API documentation. */
  documentation?: Url43;
};

export const links12Schema: Schema<Links12> = s.object<Links12>({
  self: s.optional(s.lazy(() => url41Schema)),
  pdf: s.optional(s.lazy(() => url42Schema)),
  documentation: s.optional(s.lazy(() => url43Schema)),
});
