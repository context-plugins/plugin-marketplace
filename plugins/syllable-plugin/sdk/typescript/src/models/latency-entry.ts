import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latencyCategorySchema, type LatencyCategory } from "./latency-category.js";
import { latencyUnitTypeSchema, type LatencyUnitType } from "./latency-unit-type.js";
import { metadata6Schema, type Metadata6 } from "./unions/metadata6.js";

/** Data model for latency entries. */
export type LatencyEntry = {
  timestamp: Date;
  measurementStart: Date;
  category: LatencyCategory;
  label: string;
  metadata?: Metadata6;
  unitType: LatencyUnitType;
  value: number;
  valueStr: string;
  timeDelta: string;
};

export const latencyEntrySchema: Schema<LatencyEntry> = s.object<LatencyEntry>({
  timestamp: s.dateTime(),
  measurementStart: s.dateTime(),
  category: latencyCategorySchema,
  label: s.string(),
  metadata: s.optional(s.lazy(() => metadata6Schema)),
  unitType: latencyUnitTypeSchema,
  value: s.float64(),
  valueStr: s.string(),
  timeDelta: s.string(),
  _keysMap: {
    measurementStart: "measurement_start",
    unitType: "unit_type",
    valueStr: "value_str",
    timeDelta: "time_delta",
  },
});
