import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldDataTypeSchema, type CustomFieldDataType } from "./unions/custom-field-data-type.js";

export type SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem = {
  /** The display value of the custom field */
  name?: string;
  /** The value of the custom field */
  value?: CustomFieldDataType;
  /** A boolean value to specify whether to delete this custom field entry from the subscription */
  delete?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsPatchRequestSubscriptionsItemCustomFieldsItemSchema: Schema<SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem> =
  s.object<SubscriptionsPatchRequestSubscriptionsItemCustomFieldsItem>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.lazy(() => customFieldDataTypeSchema)),
      delete: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
