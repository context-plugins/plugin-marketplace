import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicationEngagementEmailType = {
  All: "all",
  Post: "post",
  Message: "message",
} as const;
export type PublicationEngagementEmailType =
  | (typeof PublicationEngagementEmailType)[keyof typeof PublicationEngagementEmailType]
  | (string & {});

export const publicationEngagementEmailTypeSchema: EnumSchema<PublicationEngagementEmailType> =
  s.enumOf<PublicationEngagementEmailType>(PublicationEngagementEmailType);
