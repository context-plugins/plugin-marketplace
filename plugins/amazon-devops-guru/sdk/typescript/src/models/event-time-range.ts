import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventTimeRange = {
  /** The time when the event started. */
  fromTime: Date;
  /** The time when the event ended. */
  toTime: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventTimeRangeSchema: Schema<EventTimeRange> = s.object<EventTimeRange>(
  {
    fromTime: s.dateTime(),
    toTime: s.dateTime(),
    _keysMap: {
      fromTime: "FromTime",
      toTime: "ToTime",
    },
  },
  { additionalProperties: s.json() },
);
