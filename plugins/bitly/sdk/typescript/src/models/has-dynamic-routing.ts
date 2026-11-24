import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HasDynamicRouting = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type HasDynamicRouting = (typeof HasDynamicRouting)[keyof typeof HasDynamicRouting] | (string & {});

export const hasDynamicRoutingSchema: EnumSchema<HasDynamicRouting> =
  s.enumOf<HasDynamicRouting>(HasDynamicRouting);
