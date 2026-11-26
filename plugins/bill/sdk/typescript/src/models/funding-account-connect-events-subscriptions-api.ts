import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Funding account details. */
export type FundingAccountConnectEventsSubscriptionsApi = {
  id?: string;
  type?: string;
  name?: string;
  accountNumber?: string;
  last4?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingAccountConnectEventsSubscriptionsApiSchema: Schema<FundingAccountConnectEventsSubscriptionsApi> =
  s.object<FundingAccountConnectEventsSubscriptionsApi>(
    {
      id: s.optional(s.string()),
      type: s.optional(s.string()),
      name: s.optional(s.string()),
      accountNumber: s.optional(s.string()),
      last4: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
