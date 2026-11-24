import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BandwidthRateLimitInterval = {
  /** The hour of the day to start the bandwidth rate limit interval. */
  startHourOfDay: number;
  /**
   * The minute of the hour to start the bandwidth rate limit interval. The interval begins at the
   * start of that minute. To begin an interval exactly at the start of the hour, use the value 0.
   */
  startMinuteOfHour: number;
  /** The hour of the day to end the bandwidth rate limit interval. */
  endHourOfDay: number;
  /**
   * The minute of the hour to end the bandwidth rate limit interval. The bandwidth rate limit
   * interval ends at the end of the minute. To end an interval at the end of an hour, use the value
   * 59.
   */
  endMinuteOfHour: number;
  /**
   * The days of the week component of the bandwidth rate limit interval, represented as ordinal
   * numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
   */
  daysOfWeek: number[];
  /**
   * The average upload rate limit component of the bandwidth rate limit interval, in bits per
   * second. This field does not appear in the response if the upload rate limit is not set. For
   * Tape Gateway and Volume Gateway, the minimum value is 51200. This field is required for S3 File
   * Gateway, and the minimum value is 104857600.
   */
  averageUploadRateLimitInBitsPerSec?: number;
  /**
   * The average download rate limit component of the bandwidth rate limit interval, in bits per
   * second. This field does not appear in the response if the download rate limit is not set. S3
   * File Gateway does not support this feature.
   */
  averageDownloadRateLimitInBitsPerSec?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bandwidthRateLimitIntervalSchema: Schema<BandwidthRateLimitInterval> =
  s.object<BandwidthRateLimitInterval>(
    {
      startHourOfDay: s.int(),
      startMinuteOfHour: s.int(),
      endHourOfDay: s.int(),
      endMinuteOfHour: s.int(),
      daysOfWeek: s.array(s.int()),
      averageUploadRateLimitInBitsPerSec: s.optional(s.int()),
      averageDownloadRateLimitInBitsPerSec: s.optional(s.int()),
      _keysMap: {
        startHourOfDay: "StartHourOfDay",
        startMinuteOfHour: "StartMinuteOfHour",
        endHourOfDay: "EndHourOfDay",
        endMinuteOfHour: "EndMinuteOfHour",
        daysOfWeek: "DaysOfWeek",
        averageUploadRateLimitInBitsPerSec: "AverageUploadRateLimitInBitsPerSec",
        averageDownloadRateLimitInBitsPerSec: "AverageDownloadRateLimitInBitsPerSec",
      },
    },
    { additionalProperties: s.json() },
  );
