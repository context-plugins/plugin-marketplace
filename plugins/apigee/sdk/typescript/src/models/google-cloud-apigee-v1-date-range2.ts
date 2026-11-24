import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Date range of the data to export. */
export type GoogleCloudApigeeV1DateRange2 = {
  /**
   * Required. Start date of the data to export in the format `yyyy-mm-dd`. The date range begins at
   * 00:00:00 UTC on the start date.
   */
  start?: string;
  /**
   * Required. End date (exclusive) of the data to export in the format `yyyy-mm-dd`. The date range
   * ends at 00:00:00 UTC on the end date- which will not be in the output.
   */
  end?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DateRange2Schema: Schema<GoogleCloudApigeeV1DateRange2> =
  s.object<GoogleCloudApigeeV1DateRange2>(
    {
      start: s.optional(s.string()),
      end: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
