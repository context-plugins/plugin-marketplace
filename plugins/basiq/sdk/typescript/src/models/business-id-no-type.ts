import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of business ID could be ABN Or ACN. */
export const BusinessIdNoType = {
  Abn: "ABN",
  Acn: "ACN",
} as const;
export type BusinessIdNoType = (typeof BusinessIdNoType)[keyof typeof BusinessIdNoType] | (string & {});

export const businessIdNoTypeSchema: EnumSchema<BusinessIdNoType> =
  s.enumOf<BusinessIdNoType>(BusinessIdNoType);
