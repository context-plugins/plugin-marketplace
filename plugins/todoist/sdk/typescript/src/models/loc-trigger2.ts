import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Trigger type for the location reminder */
export const LocTrigger2 = {
  OnEnter: "on_enter",
  OnLeave: "on_leave",
} as const;
export type LocTrigger2 = (typeof LocTrigger2)[keyof typeof LocTrigger2] | (string & {});

export const locTrigger2Schema: EnumSchema<LocTrigger2> = s.enumOf<LocTrigger2>(LocTrigger2);
