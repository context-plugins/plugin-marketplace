import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shapeSchema, type Shape } from "./shape.js";
import { slotValueSchema, type SlotValue } from "./slot-value.js";

export type SlotValueOverride = {
  /**
   * When the shape value is List, it indicates that the values field contains a list of slot
   * values. When the value is Scalar, it indicates that the value field contains a single value.
   */
  shape?: Shape;
  value?: SlotValue;
  /**
   * A list of one or more values that the user provided for the slot. For example, for a slot that
   * elicits pizza toppings, the values might be "pepperoni" and "pineapple."
   */
  values?: SlotValueOverride[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotValueOverrideSchema: Schema<SlotValueOverride> = s.object<SlotValueOverride>(
  {
    shape: s.optional(s.lazy(() => shapeSchema)),
    value: s.optional(s.lazy(() => slotValueSchema)),
    values: s.optional(s.array(s.lazy(() => slotValueOverrideSchema))),
  },
  { additionalProperties: s.json() },
);
