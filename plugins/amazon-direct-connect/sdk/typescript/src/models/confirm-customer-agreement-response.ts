import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConfirmCustomerAgreementResponse = {
  /**
   * The status of the customer agreement when the connection was created. This will be either
   * signed or unsigned.
   */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmCustomerAgreementResponseSchema: Schema<ConfirmCustomerAgreementResponse> =
  s.object<ConfirmCustomerAgreementResponse>(
    {
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
