import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for creating an opt-out webhook subscription */
export type CreateOptOutSubscriptionRequest = {
  /**
   * Entity type for opt-out subscriptions. Currently only `contact` is supported.
   *
   * @default "contact"
   */
  entityType?: "contact";
  /** Your webhook endpoint URL (HTTPS required in production) */
  url: string;
  /** Descriptive name for this subscription */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createOptOutSubscriptionRequestProperties: s.Shape<CreateOptOutSubscriptionRequest> = {
  entityType: s.defaulted(s.literal("contact"), "contact"),
  url: s.string(),
  name: s.optional(s.string()),
};

export const createOptOutSubscriptionRequestInternalSchema: Schema<CreateOptOutSubscriptionRequest> =
  s.object<CreateOptOutSubscriptionRequest>(createOptOutSubscriptionRequestProperties, {
    additionalProperties: s.json(),
  });

export const createOptOutSubscriptionRequestSchema: Schema<CreateOptOutSubscriptionRequest> = s.lazySchema(
  () =>
    s.object<CreateOptOutSubscriptionRequest>(
      {
        ...createOptOutSubscriptionRequestProperties,
        url: s.string().check(s.maxLength(2048), s.url()),
        name: s.optional(s.string().check(s.maxLength(100))),
      },
      { additionalProperties: s.json() },
    ),
);
