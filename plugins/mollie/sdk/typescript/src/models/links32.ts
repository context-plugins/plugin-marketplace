import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentation1Schema, type Documentation1 } from "./documentation1.js";
import { self2Schema, type Self2 } from "./self2.js";

/** Links to related resources. */
export type Links32 = {
  /** The URL to this unmatched credit transfer. */
  self?: Self2;
  /** The URL to the documentation of this endpoint. */
  documentation?: Documentation1;
};

export const links32Schema: Schema<Links32> = s.object<Links32>({
  self: s.optional(s.lazy(() => self2Schema)),
  documentation: s.optional(s.lazy(() => documentation1Schema)),
});
