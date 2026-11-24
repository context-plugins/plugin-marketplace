import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operator8Schema, type Operator8 } from "./operator8.js";

export type IntentFilter = {
  /** The name of the field to use for the filter. @default "IntentName" */
  name?: "IntentName";
  /** The value to use for the filter. */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListIntents operation should return
   * only aliases that equal the specified value. Specify CO when the ListIntents operation should
   * return aliases that contain the specified value.
   */
  operator: Operator8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentFilterSchema: Schema<IntentFilter> = s.object<IntentFilter>(
  {
    name: s.defaulted(s.literal("IntentName"), "IntentName"),
    values: s.array(s.string()),
    operator: operator8Schema,
  },
  { additionalProperties: s.json() },
);
