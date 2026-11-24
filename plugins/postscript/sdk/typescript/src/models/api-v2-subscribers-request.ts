import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2SubscribersRequest = {
  /**
   * Email address for the subscriber. **Note:** when updating an email address, we will only update
   * it if none previously existed on the subscriber or we haven't linked a Shopify customer to them
   * yet. We also can only link a Shopify customer if they already exist, not retrospectively.
   */
  email?: string;
  /**
   * Tags you would like to add to the subscriber. **Note:** tags are additive, so whatever you
   * include here will be added to the existing tags on a subscriber.
   */
  tags?: string[];
  /**
   * Custom properties as key/value pairs. Values can be: strings, integers, string arrays, or ISO
   * 8601 date(time). Subscribers can have up to 50 custom properties. If properties is unset or
   * `null`, it will be ignored.
   *
   * @default '{"key": "value"}'
   */
  properties?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2SubscribersRequestSchema: Schema<ApiV2SubscribersRequest> =
  s.object<ApiV2SubscribersRequest>(
    {
      email: s.optional(s.string()),
      tags: s.optional(s.array(s.string())),
      properties: s.defaulted(s.string(), '{"key": "value"}'),
    },
    { additionalProperties: s.json() },
  );
