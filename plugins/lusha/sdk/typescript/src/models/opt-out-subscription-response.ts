import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response body returned when an opt-out subscription is created successfully */
export type OptOutSubscriptionResponse = {
  id: string;
  /** @default "contact" */
  entityType?: "contact";
  entityId: string;
  signalTypes: string[];
  url: string;
  name?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const optOutSubscriptionResponseProperties: s.Shape<OptOutSubscriptionResponse> = {
  id: s.string(),
  entityType: s.defaulted(s.literal("contact"), "contact"),
  entityId: s.string(),
  signalTypes: s.array(s.string()),
  url: s.string(),
  name: s.optional(s.string()),
  isActive: s.boolean(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
};

export const optOutSubscriptionResponseInternalSchema: Schema<OptOutSubscriptionResponse> =
  s.object<OptOutSubscriptionResponse>(optOutSubscriptionResponseProperties, {
    additionalProperties: s.json(),
  });

export const optOutSubscriptionResponseSchema: Schema<OptOutSubscriptionResponse> = s.lazySchema(() =>
  s.object<OptOutSubscriptionResponse>(
    {
      ...optOutSubscriptionResponseProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
