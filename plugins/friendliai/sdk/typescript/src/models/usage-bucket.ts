import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { usageResultSchema, type UsageResult } from "./usage-result.js";

/** Usage bucket for a time window. */
export type UsageBucket = {
  startTime: Date;
  endTime: Date;
  results: UsageResult[];
};

export const usageBucketSchema: Schema<UsageBucket> = s.object<UsageBucket>({
  startTime: s.dateTime(),
  endTime: s.dateTime(),
  results: s.array(s.lazy(() => usageResultSchema)),
  _keysMap: {
    startTime: "start_time",
    endTime: "end_time",
  },
});
