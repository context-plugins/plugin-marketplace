import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Explicit normalized outcome only; elapsed time alone is not treated as a sale. */
export const OutcomeStatus = {
  Sold: "Sold",
  SoldOnApproval: "Sold on Approval",
  NotSold: "Not Sold",
  Removed: "Removed",
} as const;
export type OutcomeStatus = (typeof OutcomeStatus)[keyof typeof OutcomeStatus] | (string & {});

export const outcomeStatusSchema: EnumSchema<OutcomeStatus> = s.enumOf<OutcomeStatus>(OutcomeStatus);
