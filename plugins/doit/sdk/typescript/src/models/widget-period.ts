import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** UTC date-time range covered by the widget result. `endTime` is exclusive. */
export type WidgetPeriod = {
  /** Inclusive start of the period. */
  startTime: Date;
  /** Exclusive end of the period. */
  endTime: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const widgetPeriodSchema: Schema<WidgetPeriod> = s.object<WidgetPeriod>(
  {
    startTime: s.dateTime(),
    endTime: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
