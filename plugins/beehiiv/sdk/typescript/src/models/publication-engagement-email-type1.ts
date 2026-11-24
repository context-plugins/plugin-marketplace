import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The email type filter applied to the engagement metrics. Defaults to `all`. */
export const PublicationEngagementEmailType1 = {
  All: "all",
  Post: "post",
  Message: "message",
} as const;
export type PublicationEngagementEmailType1 =
  | (typeof PublicationEngagementEmailType1)[keyof typeof PublicationEngagementEmailType1]
  | (string & {});

export const publicationEngagementEmailType1Schema: EnumSchema<PublicationEngagementEmailType1> =
  s.enumOf<PublicationEngagementEmailType1>(PublicationEngagementEmailType1);
