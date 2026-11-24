import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldFilterSchema, type CustomFieldFilter } from "./custom-field-filter.js";
import {
  customFieldsLogicalOperator2Schema,
  type CustomFieldsLogicalOperator2,
} from "./custom-fields-logical-operator2.js";

export type SegmentSubscriptionInput2 = {
  /** Discriminator value: custom_fields @default "custom_fields" */
  type?: "custom_fields";
  /**
   * The logical operator used to combine multiple custom field filters. Defaults to `and` if not
   * specified.
   */
  operator?: CustomFieldsLogicalOperator2;
  customFields: CustomFieldFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSubscriptionInput2Schema: Schema<SegmentSubscriptionInput2> =
  s.object<SegmentSubscriptionInput2>(
    {
      type: s.defaulted(s.literal("custom_fields"), "custom_fields"),
      operator: s.optional(s.lazy(() => customFieldsLogicalOperator2Schema)),
      customFields: s.array(s.lazy(() => customFieldFilterSchema)),
      _keysMap: {
        customFields: "custom_fields",
      },
    },
    { additionalProperties: s.json() },
  );
