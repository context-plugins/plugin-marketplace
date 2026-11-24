import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";

/** Resolved cost window for the snapshot. */
export type CloudDiagramCostTimeRange = {
  /** Inclusive start of the cost window (ISO date). */
  startDate: string;
  /** Inclusive end of the cost window (ISO date). */
  endDate: string;
  /** Bucket interval used for the trend series. */
  interval: Interval;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramCostTimeRangeSchema: Schema<CloudDiagramCostTimeRange> =
  s.object<CloudDiagramCostTimeRange>(
    {
      startDate: s.dateOnly(),
      endDate: s.dateOnly(),
      interval: intervalSchema,
    },
    { additionalProperties: s.json() },
  );
