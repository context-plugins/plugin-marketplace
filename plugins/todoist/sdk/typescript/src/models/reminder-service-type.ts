import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReminderServiceType = {
  Email: "email",
  Push: "push",
} as const;
export type ReminderServiceType =
  | (typeof ReminderServiceType)[keyof typeof ReminderServiceType]
  | (string & {});

export const reminderServiceTypeSchema: EnumSchema<ReminderServiceType> =
  s.enumOf<ReminderServiceType>(ReminderServiceType);
