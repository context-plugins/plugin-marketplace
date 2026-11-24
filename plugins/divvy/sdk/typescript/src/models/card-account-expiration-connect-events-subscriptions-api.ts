import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Card expiration month and year. */
export type CardAccountExpirationConnectEventsSubscriptionsApi = {
  year?: string;
  month?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardAccountExpirationConnectEventsSubscriptionsApiSchema: Schema<CardAccountExpirationConnectEventsSubscriptionsApi> =
  s.object<CardAccountExpirationConnectEventsSubscriptionsApi>(
    {
      year: s.optional(s.string()),
      month: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
