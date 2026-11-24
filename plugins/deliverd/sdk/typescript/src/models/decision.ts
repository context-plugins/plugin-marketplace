import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Decision = {
  Approved: "approved",
  Rejected: "rejected",
  ChangesRequested: "changes_requested",
} as const;
export type Decision = (typeof Decision)[keyof typeof Decision] | (string & {});

export const decisionSchema: EnumSchema<Decision> = s.enumOf<Decision>(Decision);
