import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Balance2 = {
  /** Balance amount to be paid to the vendor */
  amount?: number;
  /** Balance amount last updated date and time */
  lastUpdatedDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balance2Schema: Schema<Balance2> = s.object<Balance2>(
  {
    amount: s.optional(s.float64()),
    lastUpdatedDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
