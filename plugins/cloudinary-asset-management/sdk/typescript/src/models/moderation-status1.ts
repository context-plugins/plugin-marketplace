import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The moderation status to set on the asset. */
export const ModerationStatus1 = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
} as const;
export type ModerationStatus1 = (typeof ModerationStatus1)[keyof typeof ModerationStatus1] | (string & {});

export const moderationStatus1Schema: EnumSchema<ModerationStatus1> =
  s.enumOf<ModerationStatus1>(ModerationStatus1);
