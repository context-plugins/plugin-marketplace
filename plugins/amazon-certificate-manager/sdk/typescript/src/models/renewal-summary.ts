import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainValidationSchema, type DomainValidation } from "./domain-validation.js";
import { renewalStatusReasonSchema, type RenewalStatusReason } from "./renewal-status-reason.js";
import { renewalStatus2Schema, type RenewalStatus2 } from "./renewal-status2.js";

export type RenewalSummary = {
  /** The status of ACM's managed renewal of the certificate. */
  renewalStatus: RenewalStatus2;
  /**
   * Contains information about the validation of each domain name in the certificate, as it
   * pertains to ACM's managed renewal. This is different from the initial validation that occurs as
   * a result of the RequestCertificate request. This field exists only when the certificate type is
   * AMAZON_ISSUED.
   */
  domainValidationOptions: DomainValidation[];
  /** The reason that a renewal request was unsuccessful. */
  renewalStatusReason?: RenewalStatusReason;
  /** The time at which the renewal summary was last updated. */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const renewalSummarySchema: Schema<RenewalSummary> = s.object<RenewalSummary>(
  {
    renewalStatus: renewalStatus2Schema,
    domainValidationOptions: s.array(s.lazy(() => domainValidationSchema)),
    renewalStatusReason: s.optional(s.lazy(() => renewalStatusReasonSchema)),
    updatedAt: s.dateTime(),
    _keysMap: {
      renewalStatus: "RenewalStatus",
      domainValidationOptions: "DomainValidationOptions",
      renewalStatusReason: "RenewalStatusReason",
      updatedAt: "UpdatedAt",
    },
  },
  { additionalProperties: s.json() },
);
