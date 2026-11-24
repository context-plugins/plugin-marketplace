import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityTypeLushaWebhooksApiSchema,
  type EntityTypeLushaWebhooksApi,
} from "./entity-type-lusha-webhooks-api.js";

export type SubscriptionWithoutSecret = {
  id: string;
  entityType: EntityTypeLushaWebhooksApi;
  entityId: string;
  signalTypes: string[];
  url: string;
  name?: string;
  isActive: boolean;
  /** Reason subscription was disabled (null if active) */
  blockReason?: string | null;
  /** When subscription was disabled (null if active) */
  blockedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionWithoutSecretProperties: s.Shape<SubscriptionWithoutSecret> = {
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

export const subscriptionWithoutSecretInternalSchema: Schema<SubscriptionWithoutSecret> =
  s.object<SubscriptionWithoutSecret>(subscriptionWithoutSecretProperties, {
    additionalProperties: s.json(),
  });

export const subscriptionWithoutSecretSchema: Schema<SubscriptionWithoutSecret> = s.lazySchema(() =>
  s.object<SubscriptionWithoutSecret>(
    {
      ...subscriptionWithoutSecretProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
