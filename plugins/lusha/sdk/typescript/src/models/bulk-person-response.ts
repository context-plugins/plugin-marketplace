import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyResponseSchema, type CompanyResponse } from "./company-response.js";
import { contactResponseSchema, type ContactResponse } from "./contact-response.js";

export type BulkPersonResponse = {
  /** The contacts of the bulk person output, keyed by contactId */
  contacts: Record<string, ContactResponse>;
  /** The companies of the bulk person output, keyed by companyId */
  companies: Record<string, CompanyResponse>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkPersonResponseSchema: Schema<BulkPersonResponse> = s.object<BulkPersonResponse>(
  {
    contacts: s.record(
      s.string(),
      s.lazy(() => contactResponseSchema),
    ),
    companies: s.record(
      s.string(),
      s.lazy(() => companyResponseSchema),
    ),
  },
  { additionalProperties: s.json() },
);
