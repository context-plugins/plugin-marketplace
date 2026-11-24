import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnomalyReportedTimeRange = {
  /** The time when an anomaly is opened. */
  openTime: Date;
  /** The time when an anomaly is closed. */
  closeTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyReportedTimeRangeSchema: Schema<AnomalyReportedTimeRange> =
  s.object<AnomalyReportedTimeRange>(
    {
      openTime: s.dateTime(),
      closeTime: s.optional(s.dateTime()),
      _keysMap: {
        openTime: "OpenTime",
        closeTime: "CloseTime",
      },
    },
    { additionalProperties: s.json() },
  );
