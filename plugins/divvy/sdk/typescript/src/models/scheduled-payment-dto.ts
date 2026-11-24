import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Scheduled payment DTO. */
export type ScheduledPaymentDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduledPaymentDtoSchema: Schema<ScheduledPaymentDto> = s.object<ScheduledPaymentDto>(
  {
    billId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
