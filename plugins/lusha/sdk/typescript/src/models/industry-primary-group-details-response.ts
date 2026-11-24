import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyNaicsSchema, type CompanyNaics } from "./company-naics.js";
import { companySicSchema, type CompanySic } from "./company-sic.js";

export type IndustryPrimaryGroupDetailsResponse = {
  sicCodes?: CompanySic[];
  naicsCodes?: CompanyNaics[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const industryPrimaryGroupDetailsResponseSchema: Schema<IndustryPrimaryGroupDetailsResponse> =
  s.object<IndustryPrimaryGroupDetailsResponse>(
    {
      sicCodes: s.optional(s.array(s.lazy(() => companySicSchema))),
      naicsCodes: s.optional(s.array(s.lazy(() => companyNaicsSchema))),
    },
    { additionalProperties: s.json() },
  );
