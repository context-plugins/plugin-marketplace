import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyEnrichDataInternalSchema,
  companyEnrichDataSchema,
  type CompanyEnrichData,
} from "./company-enrich-data.js";

export type CompanyEnrichResponse = {
  /** The requestId used in the request */
  requestId?: string;
  companies?: CompanyEnrichData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyEnrichResponseProperties: s.Shape<CompanyEnrichResponse> = {
  requestId: s.optional(s.string()),
  companies: s.optional(s.array(s.lazy(() => companyEnrichDataInternalSchema))),
};

export const companyEnrichResponseInternalSchema: Schema<CompanyEnrichResponse> =
  s.object<CompanyEnrichResponse>(companyEnrichResponseProperties, { additionalProperties: s.json() });

export const companyEnrichResponseSchema: Schema<CompanyEnrichResponse> = s.lazySchema(() =>
  s.object<CompanyEnrichResponse>(
    {
      ...companyEnrichResponseProperties,
      companies: s.optional(s.array(s.lazy(() => companyEnrichDataSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
