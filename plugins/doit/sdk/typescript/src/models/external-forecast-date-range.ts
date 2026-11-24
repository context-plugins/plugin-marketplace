import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Start and end timestamps in RFC3339 format. */
export type ExternalForecastDateRange = {
  /** Start timestamp in RFC3339 format. */
  from?: Date;
  /** End timestamp in RFC3339 format. */
  to?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalForecastDateRangeSchema: Schema<ExternalForecastDateRange> =
  s.object<ExternalForecastDateRange>(
    {
      from: s.optional(s.dateTime()),
      to: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
