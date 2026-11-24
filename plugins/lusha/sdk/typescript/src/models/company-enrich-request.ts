import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyEnrichRequest = {
  /** The requestId from the Prospecting Search response */
  requestId: string;
  /** An array of company IDs for enrichment. Min 1, max 100. */
  companiesIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyEnrichRequestSchema: Schema<CompanyEnrichRequest> = s.object<CompanyEnrichRequest>(
  {
    requestId: s.string(),
    companiesIds: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
