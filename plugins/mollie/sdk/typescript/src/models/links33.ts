import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentation1Schema, type Documentation1 } from "./documentation1.js";
import { self3Schema, type Self3 } from "./self3.js";

/** Links to related resources. */
export type Links33 = {
  /** The URL to this action. */
  self?: Self3;
  /** The URL to the documentation of this endpoint. */
  documentation?: Documentation1;
};

export const links33Schema: Schema<Links33> = s.object<Links33>({
  self: s.optional(s.lazy(() => self3Schema)),
  documentation: s.optional(s.lazy(() => documentation1Schema)),
});
