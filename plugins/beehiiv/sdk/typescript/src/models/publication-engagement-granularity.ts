import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicationEngagementGranularity = {
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type PublicationEngagementGranularity =
  | (typeof PublicationEngagementGranularity)[keyof typeof PublicationEngagementGranularity]
  | (string & {});

export const publicationEngagementGranularitySchema: EnumSchema<PublicationEngagementGranularity> =
  s.enumOf<PublicationEngagementGranularity>(PublicationEngagementGranularity);
