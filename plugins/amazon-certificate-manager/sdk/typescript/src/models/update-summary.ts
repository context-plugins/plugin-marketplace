import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  domainValidationMethodUpdateSummarySchema,
  type DomainValidationMethodUpdateSummary,
} from "./domain-validation-method-update-summary.js";
import { status3Schema, type Status3 } from "./status3.js";
import { type3Schema, type Type3 } from "./type3.js";

export type UpdateSummary = {
  /**
   * The status of the certificate update. The following are valid values: PENDING_DOMAIN_VALIDATION
   * – The certificate update is waiting for domain ownership validation to complete. SUCCESS – The
   * certificate was updated successfully. FAILED – The certificate update failed.
   */
  status?: Status3;
  /**
   * The type of update that was requested for the certificate. The following are valid values:
   * DOMAIN_VALIDATION_METHOD – The update changes the domain validation method for the certificate.
   */
  type?: Type3;
  domainValidationMethodUpdateSummary?: DomainValidationMethodUpdateSummary;
  /** The time at which the certificate update was requested. */
  requestedAt?: Date;
  /** The time at which the certificate update status was last changed. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSummarySchema: Schema<UpdateSummary> = s.object<UpdateSummary>(
  {
    status: s.optional(s.lazy(() => status3Schema)),
    type: s.optional(s.lazy(() => type3Schema)),
    domainValidationMethodUpdateSummary: s.optional(s.lazy(() => domainValidationMethodUpdateSummarySchema)),
    requestedAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      status: "Status",
      type: "Type",
      domainValidationMethodUpdateSummary: "DomainValidationMethodUpdateSummary",
      requestedAt: "RequestedAt",
      updatedAt: "UpdatedAt",
    },
  },
  { additionalProperties: s.json() },
);
