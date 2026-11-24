import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyQuarterlyGrowth = {
  year?: number;
  quarter?: number;
  values?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyQuarterlyGrowthSchema: Schema<CompanyQuarterlyGrowth> = s.object<CompanyQuarterlyGrowth>(
  {
    year: s.optional(s.int()),
    quarter: s.optional(s.int()),
    values: s.optional(s.array(s.int())),
  },
  { additionalProperties: s.json() },
);
