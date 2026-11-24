import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaults1InternalSchema, defaults1Schema, type Defaults1 } from "./defaults1.js";
import { subscription2InternalSchema, subscription2Schema, type Subscription2 } from "./subscription2.js";

export type CreateSubscriptionRequest2 = {
  defaults: Defaults1;
  name?: string;
  subscriptions: Subscription2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSubscriptionRequest2Properties: s.Shape<CreateSubscriptionRequest2> = {
  defaults: defaults1InternalSchema,
  name: s.optional(s.string()),
  subscriptions: s.array(s.lazy(() => subscription2InternalSchema)),
};

export const createSubscriptionRequest2InternalSchema: Schema<CreateSubscriptionRequest2> =
  s.object<CreateSubscriptionRequest2>(createSubscriptionRequest2Properties, {
    additionalProperties: s.json(),
  });

export const createSubscriptionRequest2Schema: Schema<CreateSubscriptionRequest2> = s.lazySchema(() =>
  s.object<CreateSubscriptionRequest2>(
    {
      ...createSubscriptionRequest2Properties,
      defaults: defaults1Schema,
      name: s.optional(s.string().check(s.maxLength(100))),
      subscriptions: s.array(s.lazy(() => subscription2Schema)).check(s.minLength(1), s.maxLength(25)),
    },
    { additionalProperties: s.json() },
  ),
);
