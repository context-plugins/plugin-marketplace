import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The moderation status of the resource. */
export const ModerationStatus = {
  Approved: "approved",
  Rejected: "rejected",
} as const;
export type ModerationStatus = (typeof ModerationStatus)[keyof typeof ModerationStatus] | (string & {});

export const moderationStatusSchema: EnumSchema<ModerationStatus> =
  s.enumOf<ModerationStatus>(ModerationStatus);
