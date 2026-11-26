import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type CompaniesResponse = {
  value?: Company[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesResponseSchema: Schema<CompaniesResponse> = s.object<CompaniesResponse>(
  {
    value: s.optional(s.array(s.lazy(() => companySchema))),
  },
  { additionalProperties: s.json() },
);
