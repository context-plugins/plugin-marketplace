import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModerationStatus2 = {
  Approved: "approved",
  Rejected: "rejected",
  Pending: "pending",
  Queued: "queued",
  Aborted: "aborted",
} as const;
export type ModerationStatus2 = (typeof ModerationStatus2)[keyof typeof ModerationStatus2] | (string & {});

export const moderationStatus2Schema: EnumSchema<ModerationStatus2> =
  s.enumOf<ModerationStatus2>(ModerationStatus2);
