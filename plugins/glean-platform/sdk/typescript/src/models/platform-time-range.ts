import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Filter results to those last updated within this range. */
export type PlatformTimeRange = {
  /** Inclusive lower bound in ISO 8601 format. */
  start?: Date;
  /** Exclusive upper bound in ISO 8601 format. */
  end?: Date;
};

export const platformTimeRangeSchema: Schema<PlatformTimeRange> = s.object<PlatformTimeRange>({
  start: s.optional(s.dateTime()),
  end: s.optional(s.dateTime()),
});
