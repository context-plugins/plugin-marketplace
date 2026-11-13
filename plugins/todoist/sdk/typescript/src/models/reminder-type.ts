import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the reminder: 'relative' or 'absolute' */
export const ReminderType = {
  Absolute: "absolute",
  Relative: "relative",
} as const;
export type ReminderType = (typeof ReminderType)[keyof typeof ReminderType] | (string & {});

export const reminderTypeSchema: EnumSchema<ReminderType> = s.enumOf<ReminderType>(ReminderType);
