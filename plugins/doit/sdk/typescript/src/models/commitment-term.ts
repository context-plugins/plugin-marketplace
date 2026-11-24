import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Preferred or actual commitment term length for Savings Plans and related settings. */
export const CommitmentTerm = {
  OneYear: "one_year",
  ThreeYear: "three_year",
} as const;
export type CommitmentTerm = (typeof CommitmentTerm)[keyof typeof CommitmentTerm] | (string & {});

export const commitmentTermSchema: EnumSchema<CommitmentTerm> = s.enumOf<CommitmentTerm>(CommitmentTerm);
