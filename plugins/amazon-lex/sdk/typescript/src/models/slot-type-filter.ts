import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name26Schema, type Name26 } from "./name26.js";
import { operator9Schema, type Operator9 } from "./operator9.js";

export type SlotTypeFilter = {
  /** The name of the field to use for filtering. */
  name: Name26;
  /** The value to use to filter the response. */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListSlotTypes operation should return
   * only aliases that equal the specified value. Specify CO when the ListSlotTypes operation should
   * return aliases that contain the specified value.
   */
  operator: Operator9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeFilterSchema: Schema<SlotTypeFilter> = s.object<SlotTypeFilter>(
  {
    name: name26Schema,
    values: s.array(s.string()),
    operator: operator9Schema,
  },
  { additionalProperties: s.json() },
);
