import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Historical karma data point for graphing. */
export type GraphPoint = {
  /** Date for the karma data point in YYYY-MM-DD format. */
  date: string;
  /** Average karma score for this date. */
  karmaAvg: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const graphPointSchema: Schema<GraphPoint> = s.object<GraphPoint>(
  {
    date: s.string(),
    karmaAvg: s.int(),
    _keysMap: {
      karmaAvg: "karma_avg",
    },
  },
  { additionalProperties: s.json() },
);
