import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyBulkRequest = {
  id: string;
  domain?: string;
  fqdn?: string;
  name?: string;
  companyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyBulkRequestSchema: Schema<CompanyBulkRequest> = s.object<CompanyBulkRequest>(
  {
    id: s.string(),
    domain: s.optional(s.string()),
    fqdn: s.optional(s.string()),
    name: s.optional(s.string()),
    companyId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
