import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The length of time that event-level data is retained. */
export const EventDataRetention = {
  RetentionDurationUnspecified: "RETENTION_DURATION_UNSPECIFIED",
  TwoMonths: "TWO_MONTHS",
  FourteenMonths: "FOURTEEN_MONTHS",
  TwentySixMonths: "TWENTY_SIX_MONTHS",
  ThirtyEightMonths: "THIRTY_EIGHT_MONTHS",
  FiftyMonths: "FIFTY_MONTHS",
} as const;
export type EventDataRetention = (typeof EventDataRetention)[keyof typeof EventDataRetention] | (string & {});

export const eventDataRetentionSchema: EnumSchema<EventDataRetention> =
  s.enumOf<EventDataRetention>(EventDataRetention);
