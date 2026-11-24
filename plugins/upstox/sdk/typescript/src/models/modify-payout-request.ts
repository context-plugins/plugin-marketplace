import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModifyPayoutRequest = {
  /** Withdrawal amount in INR */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const modifyPayoutRequestProperties: s.Shape<ModifyPayoutRequest> = {
  amount: s.float64(),
};

export const modifyPayoutRequestInternalSchema: Schema<ModifyPayoutRequest> = s.object<ModifyPayoutRequest>(
  modifyPayoutRequestProperties,
  { additionalProperties: s.json() },
);

export const modifyPayoutRequestSchema: Schema<ModifyPayoutRequest> = s.lazySchema(() =>
  s.object<ModifyPayoutRequest>(
    {
      ...modifyPayoutRequestProperties,
      amount: s.float64().check(s.gte(100)),
    },
    { additionalProperties: s.json() },
  ),
);
