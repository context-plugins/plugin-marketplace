import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerAgreement = {
  /** The name of the agreement. */
  agreementName?: string;
  /** The status of the customer agreement. This will be either signed or unsigned */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerAgreementSchema: Schema<CustomerAgreement> = s.object<CustomerAgreement>(
  {
    agreementName: s.optional(s.string()),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
