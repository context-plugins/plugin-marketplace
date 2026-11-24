import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Outcome = {
  Approved: "approved",
  Rejected: "rejected",
  ChangesRequested: "changes_requested",
  Cancelled: "cancelled",
  Expired: "expired",
} as const;
export type Outcome = (typeof Outcome)[keyof typeof Outcome] | (string & {});

export const outcomeSchema: EnumSchema<Outcome> = s.enumOf<Outcome>(Outcome);
