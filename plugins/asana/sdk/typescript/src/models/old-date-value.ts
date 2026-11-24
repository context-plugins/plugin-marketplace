import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OldDateValue = {
  /**
   * The day on which work for this goal begins, or null if the goal has no start date. This takes a
   * date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
   */
  startOn?: string | null;
  /**
   * The UTC date and time on which this task is due, or null if the task has no due time. This
   * takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
   */
  dueAt?: Date | null;
  /** The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`. */
  dueOn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oldDateValueSchema: Schema<OldDateValue> = s.object<OldDateValue>(
  {
    startOn: s.optionalNullable(s.dateOnly()),
    dueAt: s.optionalNullable(s.dateTime()),
    dueOn: s.optional(s.dateOnly()),
    _keysMap: {
      startOn: "start_on",
      dueAt: "due_at",
      dueOn: "due_on",
    },
  },
  { additionalProperties: s.json() },
);
