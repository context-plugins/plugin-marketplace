import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acmeDomainValidationSchema, type AcmeDomainValidation } from "./acme-domain-validation.js";

export type DescribeAcmeDomainValidationResponse = {
  acmeDomainValidation?: AcmeDomainValidation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAcmeDomainValidationResponseSchema: Schema<DescribeAcmeDomainValidationResponse> =
  s.object<DescribeAcmeDomainValidationResponse>(
    {
      acmeDomainValidation: s.optional(s.lazy(() => acmeDomainValidationSchema)),
      _keysMap: {
        acmeDomainValidation: "AcmeDomainValidation",
      },
    },
    { additionalProperties: s.json() },
  );
