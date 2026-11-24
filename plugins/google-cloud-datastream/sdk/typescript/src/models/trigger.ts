import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Backfill job's triggering reason. */
export const Trigger = {
  TriggerUnspecified: "TRIGGER_UNSPECIFIED",
  Automatic: "AUTOMATIC",
  Manual: "MANUAL",
} as const;
export type Trigger = (typeof Trigger)[keyof typeof Trigger] | (string & {});

export const triggerSchema: EnumSchema<Trigger> = s.enumOf<Trigger>(Trigger);
