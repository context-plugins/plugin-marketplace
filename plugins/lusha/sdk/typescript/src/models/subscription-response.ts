import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypeLushaWebhooksApiSchema,
  type EntityTypeLushaWebhooksApi,
} from "./entity-type-lusha-webhooks-api.js";

export type SubscriptionResponse = {
  id?: string;
  entityType?: EntityTypeLushaWebhooksApi;
  entityId?: string;
  signalTypes?: string[];
  url?: string;
  name?: string;
  isActive?: boolean;
  /** Webhook secret (only returned during creation or regeneration) */
  secret?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionResponseProperties: s.Shape<SubscriptionResponse> = {
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

export const subscriptionResponseInternalSchema: Schema<SubscriptionResponse> =
  s.object<SubscriptionResponse>(subscriptionResponseProperties, { additionalProperties: s.json() });

export const subscriptionResponseSchema: Schema<SubscriptionResponse> = s.lazySchema(() =>
  s.object<SubscriptionResponse>(
    {
      ...subscriptionResponseProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
