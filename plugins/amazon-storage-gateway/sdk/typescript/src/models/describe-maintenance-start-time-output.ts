import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  softwareUpdatePreferencesSchema,
  type SoftwareUpdatePreferences,
} from "./software-update-preferences.js";

export type DescribeMaintenanceStartTimeOutput = {
  gatewayArn?: string;
  /**
   * The hour component of the maintenance start time represented as hh, where hh is the hour (0 to
   * 23). The hour of the day is in the time zone of the gateway.
   */
  hourOfDay?: number;
  /**
   * The minute component of the maintenance start time represented as mm, where mm is the minute (0
   * to 59). The minute of the hour is in the time zone of the gateway.
   */
  minuteOfHour?: number;
  /**
   * An ordinal number between 0 and 6 that represents the day of the week, where 0 represents
   * Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.
   */
  dayOfWeek?: number;
  /**
   * The day of the month component of the maintenance start time represented as an ordinal number
   * from 1 to 28, where 1 represents the first day of the month. It is not possible to set the
   * maintenance schedule to start on days 29 through 31.
   */
  dayOfMonth?: number;
  /**
   * A value that indicates the time zone that is set for the gateway. The start time and day of
   * week specified should be in the time zone of the gateway.
   */
  timezone?: string;
  softwareUpdatePreferences?: SoftwareUpdatePreferences;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeMaintenanceStartTimeOutputSchema: Schema<DescribeMaintenanceStartTimeOutput> =
  s.object<DescribeMaintenanceStartTimeOutput>(
    {
      gatewayArn: s.optional(s.string()),
      hourOfDay: s.optional(s.int()),
      minuteOfHour: s.optional(s.int()),
      dayOfWeek: s.optional(s.int()),
      dayOfMonth: s.optional(s.int()),
      timezone: s.optional(s.string()),
      softwareUpdatePreferences: s.optional(s.lazy(() => softwareUpdatePreferencesSchema)),
      _keysMap: {
        gatewayArn: "GatewayARN",
        hourOfDay: "HourOfDay",
        minuteOfHour: "MinuteOfHour",
        dayOfWeek: "DayOfWeek",
        dayOfMonth: "DayOfMonth",
        timezone: "Timezone",
        softwareUpdatePreferences: "SoftwareUpdatePreferences",
      },
    },
    { additionalProperties: s.json() },
  );
