import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body15 = {
  /**
   * The text of the task to parse using Quick Add syntax. See the endpoint description for
   * supported syntax elements.
   */
  text: string;
  /**
   * A note to attach to the task. The note content is added as a comment on the created task. If
   * the user's plan does not support comments, this parameter is ignored.
   */
  note?: string | null;
  /**
   * A reminder date in natural language format, similar to due date parsing. If the user's plan
   * does not support reminders, this parameter is ignored. If the reminder text cannot be parsed,
   * it is silently ignored.
   */
  reminder?: string | null;
  /**
   * When enabled, the default reminder will be added to the new item if it has a due date with time
   * set. See also the [auto_reminder user option](#tag/Sync/User) for more info about the default
   * reminder.
   *
   * @default false
   */
  autoReminder?: boolean;
  /**
   * When enabled, the response includes a `meta` object containing the detailed parsing results.
   * This shows exactly how the Quick Add text was interpreted, including which project, labels, due
   * date, priority, etc. were detected. Useful for debugging parsing behavior or building
   * integrations that need to understand how text was parsed.
   *
   * @default false
   */
  meta?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body15Schema: Schema<Body15> = s.object<Body15>(
  {
    text: s.string(),
    note: s.optionalNullable(s.string()),
    reminder: s.optionalNullable(s.string()),
    autoReminder: s.defaulted(s.boolean(), false),
    meta: s.defaulted(s.boolean(), false),
    _keysMap: {
      autoReminder: "auto_reminder",
    },
  },
  { additionalProperties: s.json() },
);
