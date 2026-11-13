import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Streak information (count and dates). */
export type StreakInfo = {
  /** Number of consecutive days/weeks in the streak */
  count: number;
  /** Start date of the streak (ISO 8601 format: YYYY-MM-DD), or null if no streak */
  start?: string | null;
  /** End date of the streak (ISO 8601 format: YYYY-MM-DD), or null if no streak */
  end?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streakInfoSchema: Schema<StreakInfo> = s.object<StreakInfo>(
  {
    count: s.int(),
    start: s.optionalNullable(s.dateOnly()),
    end: s.optionalNullable(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
