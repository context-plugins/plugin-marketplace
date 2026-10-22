import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeInterval = {
  /** The RFC3339 timestamp formatted start time of this event. */
  start: string;
  /** The RFC3339 timestamp formatted end time of this event. */
  end: string;
};

export const timeIntervalSchema: Schema<TimeInterval> = s.object<TimeInterval>({
  start: s.string(),
  end: s.string(),
});
