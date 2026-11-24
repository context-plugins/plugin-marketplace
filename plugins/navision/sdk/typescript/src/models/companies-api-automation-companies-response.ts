import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationCompanySchema, type AutomationCompany } from "./automation-company.js";

export type CompaniesApiAutomationCompaniesResponse = {
  value?: AutomationCompany[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiAutomationCompaniesResponseSchema: Schema<CompaniesApiAutomationCompaniesResponse> =
  s.object<CompaniesApiAutomationCompaniesResponse>(
    {
      value: s.optional(s.array(s.lazy(() => automationCompanySchema))),
    },
    { additionalProperties: s.json() },
  );
