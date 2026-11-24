import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { latestBackup2Schema, type LatestBackup2 } from "./latest-backup2.js";

/** This specifies the configuration of scheduled backup. */
export type ScheduledBackup = {
  /** Output only. The details of the latest scheduled backup. */
  latestBackup?: LatestBackup2;
  /** Optional. Defines whether the scheduled backup is enabled. The default value is false. */
  enabled?: boolean;
  /**
   * Optional. The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The
   * default is empty: scheduled backup is not enabled. Must be specified to enable scheduled
   * backups.
   */
  cronSchedule?: string;
  /**
   * Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time
   * zone name from the time zone database
   * (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or
   * Africa/Abidjan. If left unspecified, the default is UTC.
   */
  timeZone?: string;
  /**
   * Optional. A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing backup
   * files will be stored below it.
   */
  backupLocation?: string;
  /** Output only. The time when the next backups execution is scheduled to start. */
  nextScheduledTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduledBackupSchema: Schema<ScheduledBackup> = s.object<ScheduledBackup>(
  {
    latestBackup: s.optional(s.lazy(() => latestBackup2Schema)),
    enabled: s.optional(s.boolean()),
    cronSchedule: s.optional(s.string()),
    timeZone: s.optional(s.string()),
    backupLocation: s.optional(s.string()),
    nextScheduledTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
