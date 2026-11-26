import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Authorize your organization to charge the customer. */
export type ChargeAuthorizationRequestDto = {
  /** Set as `true` if your organization is authorized to charge the customer for invoices */
  authorizedToCharge: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeAuthorizationRequestDtoSchema: Schema<ChargeAuthorizationRequestDto> =
  s.object<ChargeAuthorizationRequestDto>(
    {
      authorizedToCharge: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
