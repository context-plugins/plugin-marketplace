import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyNaics = {
  naicsCodes?: number;
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyNaicsSchema: Schema<CompanyNaics> = s.object<CompanyNaics>(
  {
    naicsCodes: s.optional(s.float64()),
    description: s.string(),
  },
  { additionalProperties: s.json() },
);
