import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingAccountConnectEventsSubscriptionsApiSchema,
  type FundingAccountConnectEventsSubscriptionsApi,
} from "./funding-account-connect-events-subscriptions-api.js";

/** Payment funding information. */
export type FundingConnectEventsSubscriptionsApi = {
  amount?: number;
  currency?: string;
  /** Funding account details. */
  fundingAccount?: FundingAccountConnectEventsSubscriptionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingConnectEventsSubscriptionsApiSchema: Schema<FundingConnectEventsSubscriptionsApi> =
  s.object<FundingConnectEventsSubscriptionsApi>(
    {
      amount: s.optional(s.float64()),
      currency: s.optional(s.string()),
      fundingAccount: s.optional(s.lazy(() => fundingAccountConnectEventsSubscriptionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
