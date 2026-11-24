import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyNameResult = {
  companyId?: number;
  name?: string;
  logoUrl?: string;
  fqdn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyNameResultSchema: Schema<CompanyNameResult> = s.object<CompanyNameResult>(
  {
    companyId: s.optional(s.float64()),
    name: s.optional(s.string()),
    logoUrl: s.optional(s.string()),
    fqdn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
