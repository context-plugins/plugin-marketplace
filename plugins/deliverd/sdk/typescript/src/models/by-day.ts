import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ByDay = {
  day: string;
  views: number;
  uniqueViewers: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byDaySchema: Schema<ByDay> = s.object<ByDay>(
  {
    day: s.string(),
    views: s.float64(),
    uniqueViewers: s.float64(),
  },
  { additionalProperties: s.json() },
);
