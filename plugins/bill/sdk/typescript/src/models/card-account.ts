import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardAccountDefaultsSchema, type CardAccountDefaults } from "./card-account-defaults.js";
import {
  cardAccountExpirationConnectEventsSubscriptionsApiSchema,
  type CardAccountExpirationConnectEventsSubscriptionsApi,
} from "./card-account-expiration-connect-events-subscriptions-api.js";

export type CardAccount = {
  id?: string;
  archived?: boolean;
  createdTime?: Date;
  createdBy?: string;
  updatedTime?: Date;
  nameOnAccount?: string;
  brand?: string;
  type?: string;
  status?: string;
  last4?: string;
  /** Card expiration month and year. */
  expiration?: CardAccountExpirationConnectEventsSubscriptionsApi;
  /** Card payment default values for BILL operations. */
  default?: CardAccountDefaults;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardAccountSchema: Schema<CardAccount> = s.object<CardAccount>(
  {
    id: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    createdTime: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    updatedTime: s.optional(s.dateTime()),
    nameOnAccount: s.optional(s.string()),
    brand: s.optional(s.string()),
    type: s.optional(s.string()),
    status: s.optional(s.string()),
    last4: s.optional(s.string()),
    expiration: s.optional(s.lazy(() => cardAccountExpirationConnectEventsSubscriptionsApiSchema)),
    default: s.optional(s.lazy(() => cardAccountDefaultsSchema)),
  },
  { additionalProperties: s.json() },
);
