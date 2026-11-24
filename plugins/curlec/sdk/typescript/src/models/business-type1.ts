import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cannot be changed after creation. */
export const BusinessType1 = {
  Route: "route",
} as const;
export type BusinessType1 = (typeof BusinessType1)[keyof typeof BusinessType1] | (string & {});

export const businessType1Schema: EnumSchema<BusinessType1> = s.enumOf<BusinessType1>(BusinessType1);
