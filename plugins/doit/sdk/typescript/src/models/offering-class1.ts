import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OfferingClass1 = {
  Standard: "standard",
  Convertible: "convertible",
} as const;
export type OfferingClass1 = (typeof OfferingClass1)[keyof typeof OfferingClass1] | (string & {});

export const offeringClass1Schema: EnumSchema<OfferingClass1> = s.enumOf<OfferingClass1>(OfferingClass1);
