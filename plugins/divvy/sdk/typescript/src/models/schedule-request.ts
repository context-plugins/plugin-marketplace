import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { periodRequestSchema, type PeriodRequest } from "./period-request.js";

/** Schedule properties for a recurring bill. */
export type ScheduleRequest = {
  period?: PeriodRequest;
  /**
   * Bill frequency per time `period`.
   *
   * For example, if the time `period` is `MONTHLY` and `frequency` is `3`, a bill is generated once
   * every 3 months.
   */
  frequency?: number;
  /** Due date for the next bill. This value is in the `yyyy-MM-dd` format. */
  nextDueDate?: string;
  /**
   * End date for the recurring bills schedule. Recurring bills stop on the `endDate`. This value is
   * in the `yyyy-MM-dd` format.
   */
  endDate?: string;
  /**
   * Number of days before `nextDueDate` when the next bill is generated. If the date has occurred
   * in the past for one or more bills, all those bills are generated.
   */
  daysInAdvance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleRequestSchema: Schema<ScheduleRequest> = s.object<ScheduleRequest>(
  {
    period: s.optional(s.lazy(() => periodRequestSchema)),
    frequency: s.optional(s.int()),
    nextDueDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    daysInAdvance: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
