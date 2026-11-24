import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vendor account balance information. */
export type BalanceConnectEventsSubscriptionsApi = {
  amount?: number;
  lastUpdatedDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceConnectEventsSubscriptionsApiSchema: Schema<BalanceConnectEventsSubscriptionsApi> =
  s.object<BalanceConnectEventsSubscriptionsApi>(
    {
      amount: s.optional(s.float64()),
      lastUpdatedDate: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
