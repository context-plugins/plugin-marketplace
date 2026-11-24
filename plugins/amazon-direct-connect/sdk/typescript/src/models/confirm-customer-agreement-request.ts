import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfirmCustomerAgreementRequest = {
  /** The name of the customer agreement. */
  agreementName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmCustomerAgreementRequestSchema: Schema<ConfirmCustomerAgreementRequest> =
  s.object<ConfirmCustomerAgreementRequest>(
    {
      agreementName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
