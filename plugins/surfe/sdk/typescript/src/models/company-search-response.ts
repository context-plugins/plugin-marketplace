import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type CompanySearchResponse = {
  companies?: Company[];
  total?: number;
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySearchResponseSchema: Schema<CompanySearchResponse> = s.object<CompanySearchResponse>(
  {
    companies: s.optional(s.array(s.lazy(() => companySchema))),
    total: s.optional(s.int()),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
