import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The type Balance dto. */
export type BalanceBillV3VendorsApi = {
  /** Balance amount to be paid to the vendor */
  amount?: number;
  /** Balance amount last updated date and time */
  lastUpdatedDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceBillV3VendorsApiSchema: Schema<BalanceBillV3VendorsApi> =
  s.object<BalanceBillV3VendorsApi>(
    {
      amount: s.optional(s.float64()),
      lastUpdatedDate: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
