import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { httpRedirectSchema, type HttpRedirect } from "./http-redirect.js";
import { resourceRecordSchema, type ResourceRecord } from "./resource-record.js";
import { validationMethodSchema, type ValidationMethod } from "./validation-method.js";
import { validationStatusSchema, type ValidationStatus } from "./validation-status.js";

export type DomainValidation = {
  /**
   * A fully qualified domain name (FQDN) in the certificate. For example, www.example.com or
   * example.com.
   */
  domainName: string;
  /** A list of email addresses that ACM used to send domain validation emails. */
  validationEmails?: string[];
  /** The domain name that ACM used to send domain validation emails. */
  validationDomain?: string;
  /**
   * The validation status of the domain name. This can be one of the following values:
   * PENDING_VALIDATION SUCCESS FAILED
   */
  validationStatus?: ValidationStatus;
  resourceRecord?: ResourceRecord;
  httpRedirect?: HttpRedirect;
  /** Specifies the domain validation method. */
  validationMethod?: ValidationMethod;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainValidationSchema: Schema<DomainValidation> = s.object<DomainValidation>(
  {
    domainName: s.string(),
    validationEmails: s.optional(s.array(s.string())),
    validationDomain: s.optional(s.string()),
    validationStatus: s.optional(s.lazy(() => validationStatusSchema)),
    resourceRecord: s.optional(s.lazy(() => resourceRecordSchema)),
    httpRedirect: s.optional(s.lazy(() => httpRedirectSchema)),
    validationMethod: s.optional(s.lazy(() => validationMethodSchema)),
    _keysMap: {
      domainName: "DomainName",
      validationEmails: "ValidationEmails",
      validationDomain: "ValidationDomain",
      validationStatus: "ValidationStatus",
      resourceRecord: "ResourceRecord",
      httpRedirect: "HttpRedirect",
      validationMethod: "ValidationMethod",
    },
  },
  { additionalProperties: s.json() },
);
