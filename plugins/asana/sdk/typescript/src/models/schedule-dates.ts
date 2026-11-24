import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option.
 * Requires either `start_on` or `due_on`, but not both.
 */
export type ScheduleDates = {
  /** Determines if the auto-shifted dates should skip weekends. */
  shouldSkipWeekends: boolean;
  /**
   * Sets the last due date in the duplicated project to the given date. The rest of the due dates
   * will be offset by the same amount as the due dates in the original project.
   */
  dueOn?: string;
  /**
   * Sets the first start date in the duplicated project to the given date. The rest of the start
   * dates will be offset by the same amount as the start dates in the original project.
   */
  startOn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleDatesSchema: Schema<ScheduleDates> = s.object<ScheduleDates>(
  {
    shouldSkipWeekends: s.boolean(),
    dueOn: s.optional(s.string()),
    startOn: s.optional(s.string()),
    _keysMap: {
      shouldSkipWeekends: "should_skip_weekends",
      dueOn: "due_on",
      startOn: "start_on",
    },
  },
  { additionalProperties: s.json() },
);
