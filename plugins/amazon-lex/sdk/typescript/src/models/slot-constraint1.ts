import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the slot is required or optional. An intent is complete when all required slots are
 * filled.
 */
export const SlotConstraint1 = {
  Required: "Required",
  Optional: "Optional",
} as const;
export type SlotConstraint1 = (typeof SlotConstraint1)[keyof typeof SlotConstraint1] | (string & {});

export const slotConstraint1Schema: EnumSchema<SlotConstraint1> = s.enumOf<SlotConstraint1>(SlotConstraint1);
