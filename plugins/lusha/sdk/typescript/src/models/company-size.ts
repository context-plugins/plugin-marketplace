import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Company size details. */
export type CompanySize = {
  min?: number;
  max?: number;
  employeesInLinkedin?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySizeSchema: Schema<CompanySize> = s.object<CompanySize>(
  {
    min: s.optional(s.float64()),
    max: s.optional(s.float64()),
    employeesInLinkedin: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
