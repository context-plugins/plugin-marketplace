import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * open: action required. under_review: evidence submitted, awaiting bank decision. won: resolved in
 * your favour. lost: resolved against you. closed: resolved without chargeback.
 */
export const Status = {
  Open: "open",
  UnderReview: "under_review",
  Won: "won",
  Lost: "lost",
  Closed: "closed",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
