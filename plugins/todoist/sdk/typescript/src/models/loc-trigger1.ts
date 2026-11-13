import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Trigger type: 'on_enter' or 'on_leave'. If not provided (or null), the value remains unchanged.
 */
export const LocTrigger1 = {
  OnEnter: "on_enter",
  OnLeave: "on_leave",
} as const;
export type LocTrigger1 = (typeof LocTrigger1)[keyof typeof LocTrigger1] | (string & {});

export const locTrigger1Schema: EnumSchema<LocTrigger1> = s.enumOf<LocTrigger1>(LocTrigger1);
