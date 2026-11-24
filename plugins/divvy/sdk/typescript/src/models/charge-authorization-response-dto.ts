import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The type Charge customer response dto. */
export type ChargeAuthorizationResponseDto = {
  /** Set as `true` if your organization is authorized to charge the customer for invoices */
  authorizedToCharge?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeAuthorizationResponseDtoSchema: Schema<ChargeAuthorizationResponseDto> =
  s.object<ChargeAuthorizationResponseDto>(
    {
      authorizedToCharge: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
