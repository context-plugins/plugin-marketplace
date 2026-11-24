import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shape1Schema, type Shape1 } from "./shape1.js";
import { valueSchema, type Value } from "./value.js";

export type Slot = {
  value?: Value;
  /**
   * When the shape value is List, it indicates that the values field contains a list of slot
   * values. When the value is Scalar, it indicates that the value field contains a single value.
   */
  shape?: Shape1;
  /**
   * A list of one or more values that the user provided for the slot. For example, if a for a slot
   * that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
   */
  values?: Slot[];
  /** The constituent sub slots of a composite slot. */
  subSlots?: Record<string, Slot>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotSchema: Schema<Slot> = s.object<Slot>(
  {
    value: s.optional(s.lazy(() => valueSchema)),
    shape: s.optional(s.lazy(() => shape1Schema)),
    values: s.optional(s.array(s.lazy(() => slotSchema))),
    subSlots: s.optional(
      s.record(
        s.string(),
        s.lazy(() => slotSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
