import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** RI offering class. */
export const OfferingClass = {
  Standard: "standard",
  Convertible: "convertible",
} as const;
export type OfferingClass = (typeof OfferingClass)[keyof typeof OfferingClass] | (string & {});

export const offeringClassSchema: EnumSchema<OfferingClass> = s.enumOf<OfferingClass>(OfferingClass);
