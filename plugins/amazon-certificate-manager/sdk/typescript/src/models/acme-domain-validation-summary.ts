import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { failureDetailsSchema, type FailureDetails } from "./failure-details.js";
import { prevalidationDetailsSchema, type PrevalidationDetails } from "./prevalidation-details.js";
import { prevalidationTypeSchema, type PrevalidationType } from "./prevalidation-type.js";
import {
  statusAwsCertificateManagerAcmeDomainValidationApiSchema,
  type StatusAwsCertificateManagerAcmeDomainValidationApi,
} from "./status-aws-certificate-manager-acme-domain-validation-api.js";

export type AcmeDomainValidationSummary = {
  /** The Amazon Resource Name (ARN) of the ACME domain validation. */
  acmeDomainValidationArn?: string;
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn?: string;
  /** The domain name being validated. */
  domainName?: string;
  /** The type of prevalidation used. */
  prevalidationType?: PrevalidationType;
  /** Exactly one member is set. */
  prevalidationDetails?: PrevalidationDetails;
  /** The status of the domain validation. */
  status?: StatusAwsCertificateManagerAcmeDomainValidationApi;
  failureDetails?: FailureDetails;
  /** The time at which the domain validation was created. */
  createdAt?: string;
  /** The time at which the domain validation was last updated. */
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acmeDomainValidationSummarySchema: Schema<AcmeDomainValidationSummary> =
  s.object<AcmeDomainValidationSummary>(
    {
      acmeDomainValidationArn: s.optional(s.string()),
      acmeEndpointArn: s.optional(s.string()),
      domainName: s.optional(s.string()),
      prevalidationType: s.optional(s.lazy(() => prevalidationTypeSchema)),
      prevalidationDetails: s.optional(s.lazy(() => prevalidationDetailsSchema)),
      status: s.optional(s.lazy(() => statusAwsCertificateManagerAcmeDomainValidationApiSchema)),
      failureDetails: s.optional(s.lazy(() => failureDetailsSchema)),
      createdAt: s.optional(s.string()),
      updatedAt: s.optional(s.string()),
      _keysMap: {
        acmeDomainValidationArn: "AcmeDomainValidationArn",
        acmeEndpointArn: "AcmeEndpointArn",
        domainName: "DomainName",
        prevalidationType: "PrevalidationType",
        prevalidationDetails: "PrevalidationDetails",
        status: "Status",
        failureDetails: "FailureDetails",
        createdAt: "CreatedAt",
        updatedAt: "UpdatedAt",
      },
    },
    { additionalProperties: s.json() },
  );
