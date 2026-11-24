import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Insurance = {
  insuranceCompany?: string;
  insuranceType?: string;
  insurancePrice?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insuranceSchema: Schema<Insurance> = s.object<Insurance>(
  {
    insuranceCompany: s.optional(s.string()),
    insuranceType: s.optional(s.string()),
    insurancePrice: s.optional(s.float64()),
    _keysMap: {
      insuranceCompany: "insurance_company",
      insuranceType: "insurance_type",
      insurancePrice: "insurance_price",
    },
  },
  { additionalProperties: s.json() },
);
