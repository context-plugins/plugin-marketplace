import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventData = {
  id?: string;
  subscriberId?: string;
  shopId?: string;
  /** @default true */
  isOptOut?: boolean;
  shopifyCustomerId?: Record<string, unknown>;
  fromNumber?: string;
  createdAt?: string;
  body?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventDataSchema: Schema<EventData> = s.object<EventData>(
  {
    id: s.optional(s.string()),
    subscriberId: s.optional(s.string()),
    shopId: s.optional(s.string()),
    isOptOut: s.defaulted(s.boolean(), true),
    shopifyCustomerId: s.optional(s.record(s.string(), s.unknown())),
    fromNumber: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    body: s.optional(s.string()),
    _keysMap: {
      subscriberId: "subscriber_id",
      shopId: "shop_id",
      isOptOut: "is_opt_out",
      shopifyCustomerId: "shopify_customer_id",
      fromNumber: "from_number",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
