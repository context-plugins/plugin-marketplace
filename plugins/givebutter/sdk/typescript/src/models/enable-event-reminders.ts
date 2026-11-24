import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type EnableEventReminders = {
  /** @default "enable_event_reminders" */
  name?: "enable_event_reminders";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enableEventRemindersSchema: Schema<EnableEventReminders> = s.object<EnableEventReminders>(
  {
    name: s.defaulted(s.literal("enable_event_reminders"), "enable_event_reminders"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
