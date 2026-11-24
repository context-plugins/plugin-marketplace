import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyInputSchema, type CompanyInput } from "./company-input.js";
import { customFieldSchema, type CustomField } from "./custom-field.js";
import { personInputSchema, type PersonInput } from "./person-input.js";

export type SingleEnrichmentRequest = {
  person?: PersonInput;
  company?: CompanyInput;
  /** External identifier echoed back on the result. Not used for processing. */
  externalId?: string;
  customFields?: CustomField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const singleEnrichmentRequestSchema: Schema<SingleEnrichmentRequest> =
  s.object<SingleEnrichmentRequest>(
    {
      person: s.optional(s.lazy(() => personInputSchema)),
      company: s.optional(s.lazy(() => companyInputSchema)),
      externalId: s.optional(s.string()),
      customFields: s.optional(s.array(s.lazy(() => customFieldSchema))),
      _keysMap: {
        externalId: "external_id",
        customFields: "custom_fields",
      },
    },
    { additionalProperties: s.json() },
  );
