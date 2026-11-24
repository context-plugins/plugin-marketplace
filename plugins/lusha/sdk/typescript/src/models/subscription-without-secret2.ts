import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypeLushaWebhooksApiSchema,
  type EntityTypeLushaWebhooksApi,
} from "./entity-type-lusha-webhooks-api.js";

export type SubscriptionWithoutSecret2 = {
  id: string;
  entityType: EntityTypeLushaWebhooksApi;
  entityId: string;
  signalTypes: string[];
  url: string;
  name?: string;
  isActive: boolean;
  blockReason?: string | null;
  blockedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionWithoutSecret2Properties: s.Shape<SubscriptionWithoutSecret2> = {
  id: s.string(),
  entityType: entityTypeLushaWebhooksApiSchema,
  entityId: s.string(),
  signalTypes: s.array(s.string()),
  url: s.string(),
  name: s.optional(s.string()),
  isActive: s.boolean(),
  blockReason: s.optionalNullable(s.string()),
  blockedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
};

export const subscriptionWithoutSecret2InternalSchema: Schema<SubscriptionWithoutSecret2> =
  s.object<SubscriptionWithoutSecret2>(subscriptionWithoutSecret2Properties, {
    additionalProperties: s.json(),
  });

export const subscriptionWithoutSecret2Schema: Schema<SubscriptionWithoutSecret2> = s.lazySchema(() =>
  s.object<SubscriptionWithoutSecret2>(
    {
      ...subscriptionWithoutSecret2Properties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
