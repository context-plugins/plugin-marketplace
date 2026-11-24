import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccountsOverviewRequest = {
  /**
   * The start of the time range passed in. The start time granularity is at the day level. The
   * floor of the start time is used. Returned information occurred after this day.
   */
  fromTime: Date;
  /**
   * The end of the time range passed in. The start time granularity is at the day level. The floor
   * of the start time is used. Returned information occurred before this day. If this is not
   * specified, then the current day is used.
   */
  toTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountsOverviewRequestSchema: Schema<AccountsOverviewRequest> =
  s.object<AccountsOverviewRequest>(
    {
      fromTime: s.dateTime(),
      toTime: s.optional(s.dateTime()),
      _keysMap: {
        fromTime: "FromTime",
        toTime: "ToTime",
      },
    },
    { additionalProperties: s.json() },
  );
