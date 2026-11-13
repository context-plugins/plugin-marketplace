import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Trigger type: 'on_enter' or 'on_leave' */
export const LocTrigger = {
  OnEnter: "on_enter",
  OnLeave: "on_leave",
} as const;
export type LocTrigger = (typeof LocTrigger)[keyof typeof LocTrigger] | (string & {});

export const locTriggerSchema: EnumSchema<LocTrigger> = s.enumOf<LocTrigger>(LocTrigger);
