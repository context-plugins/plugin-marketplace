import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyErrorResponseSchema, type CompanyErrorResponse } from "./company-error-response.js";
import {
  companySingleResponseDataInternalSchema,
  companySingleResponseDataSchema,
  type CompanySingleResponseData,
} from "./company-single-response-data.js";

export type CompanySingleResponse = {
  data?: CompanySingleResponseData;
  errors?: CompanyErrorResponse;
  /** Currently returns an empty value; this field should be deprecated in future releases. */
  meta?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companySingleResponseProperties: s.Shape<CompanySingleResponse> = {
  data: s.optional(s.lazy(() => companySingleResponseDataInternalSchema)),
  errors: s.optional(s.lazy(() => companyErrorResponseSchema)),
  meta: s.optional(s.record(s.string(), s.unknown())),
};

export const companySingleResponseInternalSchema: Schema<CompanySingleResponse> =
  s.object<CompanySingleResponse>(companySingleResponseProperties, { additionalProperties: s.json() });

export const companySingleResponseSchema: Schema<CompanySingleResponse> = s.lazySchema(() =>
  s.object<CompanySingleResponse>(
    {
      ...companySingleResponseProperties,
      data: s.optional(s.lazy(() => companySingleResponseDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
