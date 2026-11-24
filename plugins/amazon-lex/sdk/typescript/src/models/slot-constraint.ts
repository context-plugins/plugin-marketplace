import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the slot is required or optional. */
export const SlotConstraint = {
  Required: "Required",
  Optional: "Optional",
} as const;
export type SlotConstraint = (typeof SlotConstraint)[keyof typeof SlotConstraint] | (string & {});

export const slotConstraintSchema: EnumSchema<SlotConstraint> = s.enumOf<SlotConstraint>(SlotConstraint);
