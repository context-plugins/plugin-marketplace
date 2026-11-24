import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acmeDomainValidationSummarySchema,
  type AcmeDomainValidationSummary,
} from "./acme-domain-validation-summary.js";

export type ListAcmeDomainValidationsResponse = {
  /** The list of domain validations. */
  acmeDomainValidations?: AcmeDomainValidationSummary[];
  /** A token for pagination. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAcmeDomainValidationsResponseSchema: Schema<ListAcmeDomainValidationsResponse> =
  s.object<ListAcmeDomainValidationsResponse>(
    {
      acmeDomainValidations: s.optional(s.array(s.lazy(() => acmeDomainValidationSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        acmeDomainValidations: "AcmeDomainValidations",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
