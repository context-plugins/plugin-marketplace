import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSubscriptionRequest = {
  /** New signal types to subscribe to */
  signalTypes?: string[];
  /** New webhook URL */
  url?: string;
  /** New subscription name */
  name?: string;
  /** Enable or disable subscription */
  isActive?: boolean;
  /** Generate new webhook secret (secret will be returned in response) */
  regenerateSecret?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateSubscriptionRequestProperties: s.Shape<UpdateSubscriptionRequest> = {
  signalTypes: s.optional(s.array(s.string())),
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  isActive: s.optional(s.boolean()),
  regenerateSecret: s.optional(s.boolean()),
};

export const updateSubscriptionRequestInternalSchema: Schema<UpdateSubscriptionRequest> =
  s.object<UpdateSubscriptionRequest>(updateSubscriptionRequestProperties, {
    additionalProperties: s.json(),
  });

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = s.lazySchema(() =>
  s.object<UpdateSubscriptionRequest>(
    {
      ...updateSubscriptionRequestProperties,
      url: s.optional(s.string().check(s.maxLength(2048), s.url())),
      name: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
