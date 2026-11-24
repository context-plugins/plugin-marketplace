import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyCrunchbaseResponseSchema,
  type CompanyCrunchbaseResponse,
} from "./company-crunchbase-response.js";
import { companyLinkedinResponseSchema, type CompanyLinkedinResponse } from "./company-linkedin-response.js";

export type CompanySocialResponse = {
  crunchbase?: CompanyCrunchbaseResponse;
  linkedin?: CompanyLinkedinResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySocialResponseSchema: Schema<CompanySocialResponse> = s.object<CompanySocialResponse>(
  {
    crunchbase: s.optional(s.lazy(() => companyCrunchbaseResponseSchema)),
    linkedin: s.optional(s.lazy(() => companyLinkedinResponseSchema)),
  },
  { additionalProperties: s.json() },
);
