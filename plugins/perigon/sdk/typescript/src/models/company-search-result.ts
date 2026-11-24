import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

/** Company search result */
export type CompanySearchResult = {
  status: number;
  numResults: number;
  results: Company[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySearchResultSchema: Schema<CompanySearchResult> = s.object<CompanySearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => companySchema)),
  },
  { additionalProperties: s.json() },
);
