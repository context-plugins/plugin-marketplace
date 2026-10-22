import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { costResultSchema, type CostResult } from "./cost-result.js";

/** Cost bucket for a time window. */
export type CostBucket = {
  startTime: Date;
  endTime: Date;
  results?: CostResult[];
};

export const costBucketSchema: Schema<CostBucket> = s.object<CostBucket>({
  startTime: s.dateTime(),
  endTime: s.dateTime(),
  results: s.optional(s.array(s.lazy(() => costResultSchema))),
  _keysMap: {
    startTime: "start_time",
    endTime: "end_time",
  },
});
