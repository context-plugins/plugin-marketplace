import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Due date input for absolute reminders. */
export type ReminderDueAttribute = {
  /** Absolute reminder date in ISO 8601 format. */
  date?: string | null;
  /** Natural-language reminder date. */
  string?: string | null;
  /** Language used to parse the natural-language date. */
  lang?: string | null;
  /** Timezone for the reminder date. */
  timezone?: string | null;
  /** Whether the reminder date is recurring. */
  isRecurring?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reminderDueAttributeSchema: Schema<ReminderDueAttribute> = s.object<ReminderDueAttribute>(
  {
    date: s.optionalNullable(s.string()),
    string: s.optionalNullable(s.string()),
    lang: s.optionalNullable(s.string()),
    timezone: s.optionalNullable(s.string()),
    isRecurring: s.optionalNullable(s.boolean()),
    _keysMap: {
      isRecurring: "is_recurring",
    },
  },
  { additionalProperties: s.json() },
);
