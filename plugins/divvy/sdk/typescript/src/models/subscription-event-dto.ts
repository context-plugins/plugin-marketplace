import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Subscription events information. */
export type SubscriptionEventDto = {
  /** Event type */
  type: string;
  /** Event type version */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionEventDtoProperties: s.Shape<SubscriptionEventDto> = {
  type: s.string(),
  version: s.string(),
};

export const subscriptionEventDtoInternalSchema: Schema<SubscriptionEventDto> =
  s.object<SubscriptionEventDto>(subscriptionEventDtoProperties, { additionalProperties: s.json() });

export const subscriptionEventDtoSchema: Schema<SubscriptionEventDto> = s.lazySchema(() =>
  s.object<SubscriptionEventDto>(
    {
      ...subscriptionEventDtoProperties,
      type: s.string().check(s.minLength(1)),
      version: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
