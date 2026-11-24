import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operator10Schema, type Operator10 } from "./operator10.js";

export type SlotFilter = {
  /** The name of the field to use for filtering. @default "SlotName" */
  name?: "SlotName";
  /** The value to use to filter the response. */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListSlots operation should return only
   * aliases that equal the specified value. Specify CO when the ListSlots operation should return
   * aliases that contain the specified value.
   */
  operator: Operator10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotFilterSchema: Schema<SlotFilter> = s.object<SlotFilter>(
  {
    name: s.defaulted(s.literal("SlotName"), "SlotName"),
    values: s.array(s.string()),
    operator: operator10Schema,
  },
  { additionalProperties: s.json() },
);
