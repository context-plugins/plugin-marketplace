import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypeLushaWebhooksApiSchema,
  type EntityTypeLushaWebhooksApi,
} from "./entity-type-lusha-webhooks-api.js";

export type SubscriptionResponse2 = {
  id?: string;
  entityType?: EntityTypeLushaWebhooksApi;
  entityId?: string;
  signalTypes?: string[];
  url?: string;
  name?: string;
  isActive?: boolean;
  secret?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionResponse2Properties: s.Shape<SubscriptionResponse2> = {
  id: s.optional(s.string()),
  entityType: s.optional(s.lazy(() => entityTypeLushaWebhooksApiSchema)),
  entityId: s.optional(s.string()),
  signalTypes: s.optional(s.array(s.string())),
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  isActive: s.optional(s.boolean()),
  secret: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
};

export const subscriptionResponse2InternalSchema: Schema<SubscriptionResponse2> =
  s.object<SubscriptionResponse2>(subscriptionResponse2Properties, { additionalProperties: s.json() });

export const subscriptionResponse2Schema: Schema<SubscriptionResponse2> = s.lazySchema(() =>
  s.object<SubscriptionResponse2>(
    {
      ...subscriptionResponse2Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
