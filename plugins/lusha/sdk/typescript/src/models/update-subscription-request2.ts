import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSubscriptionRequest2 = {
  signalTypes?: string[];
  url?: string;
  name?: string;
  isActive?: boolean;
  regenerateSecret?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateSubscriptionRequest2Properties: s.Shape<UpdateSubscriptionRequest2> = {
  signalTypes: s.optional(s.array(s.string())),
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  isActive: s.optional(s.boolean()),
  regenerateSecret: s.optional(s.boolean()),
};

export const updateSubscriptionRequest2InternalSchema: Schema<UpdateSubscriptionRequest2> =
  s.object<UpdateSubscriptionRequest2>(updateSubscriptionRequest2Properties, {
    additionalProperties: s.json(),
  });

export const updateSubscriptionRequest2Schema: Schema<UpdateSubscriptionRequest2> = s.lazySchema(() =>
  s.object<UpdateSubscriptionRequest2>(
    {
      ...updateSubscriptionRequest2Properties,
      url: s.optional(s.string().check(s.maxLength(2048), s.url())),
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
