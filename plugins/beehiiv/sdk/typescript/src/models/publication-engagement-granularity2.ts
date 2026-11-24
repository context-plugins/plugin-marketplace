import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The granularity at which the engagement metrics are reported. */
export const PublicationEngagementGranularity2 = {
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type PublicationEngagementGranularity2 =
  | (typeof PublicationEngagementGranularity2)[keyof typeof PublicationEngagementGranularity2]
  | (string & {});

export const publicationEngagementGranularity2Schema: EnumSchema<PublicationEngagementGranularity2> =
  s.enumOf<PublicationEngagementGranularity2>(PublicationEngagementGranularity2);
