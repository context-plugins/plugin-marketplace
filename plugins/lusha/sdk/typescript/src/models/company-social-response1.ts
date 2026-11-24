import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyCrunchbaseResponseSchema,
  type CompanyCrunchbaseResponse,
} from "./company-crunchbase-response.js";
import { companyLinkedinResponseSchema, type CompanyLinkedinResponse } from "./company-linkedin-response.js";

/** Social media links associated with the company. */
export type CompanySocialResponse1 = {
  crunchbase?: CompanyCrunchbaseResponse;
  linkedin?: CompanyLinkedinResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySocialResponse1Schema: Schema<CompanySocialResponse1> = s.object<CompanySocialResponse1>(
  {
    crunchbase: s.optional(s.lazy(() => companyCrunchbaseResponseSchema)),
    linkedin: s.optional(s.lazy(() => companyLinkedinResponseSchema)),
  },
  { additionalProperties: s.json() },
);
