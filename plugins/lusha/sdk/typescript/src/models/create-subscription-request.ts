import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultsInternalSchema, defaultsSchema, type Defaults } from "./defaults.js";
import { subscription1InternalSchema, subscription1Schema, type Subscription1 } from "./subscription1.js";

export type CreateSubscriptionRequest = {
  defaults: Defaults;
  /** Default subscription name prefix */
  name?: string;
  /** Array of subscriptions to create (max 25) */
  subscriptions: Subscription1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSubscriptionRequestProperties: s.Shape<CreateSubscriptionRequest> = {
  defaults: defaultsInternalSchema,
  name: s.optional(s.string()),
  subscriptions: s.array(s.lazy(() => subscription1InternalSchema)),
};

export const createSubscriptionRequestInternalSchema: Schema<CreateSubscriptionRequest> =
  s.object<CreateSubscriptionRequest>(createSubscriptionRequestProperties, {
    additionalProperties: s.json(),
  });

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> = s.lazySchema(() =>
  s.object<CreateSubscriptionRequest>(
    {
      ...createSubscriptionRequestProperties,
      defaults: defaultsSchema,
      name: s.optional(s.string().check(s.maxLength(100))),
      subscriptions: s.array(s.lazy(() => subscription1Schema)).check(s.minLength(1), s.maxLength(25)),
    },
    { additionalProperties: s.json() },
  ),
);
