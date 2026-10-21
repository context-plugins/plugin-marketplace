import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessType = {
  Llc: "llc",
  Corporation: "corporation",
  Partnership: "partnership",
} as const;
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType] | (string & {});

export const businessTypeSchema: EnumSchema<BusinessType> = s.enumOf<BusinessType>(BusinessType);
