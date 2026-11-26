import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** PaymentTerm response DTO. */
export type PaymentTermResponseDto = {
  /** BILL-generated ID of the payment term. The value begins with `00p`. */
  id?: string;
  /** Payment term name */
  name?: string;
  /** Number of days until payment is due */
  daysDue?: number;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentTermResponseDtoSchema: Schema<PaymentTermResponseDto> = s.object<PaymentTermResponseDto>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    daysDue: s.optional(s.int()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
