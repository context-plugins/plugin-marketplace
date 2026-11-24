import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the type for a reimbursement in the Spend API. */
export const ReimbursementType = {
  Purchase: "PURCHASE",
  Mileage: "MILEAGE",
} as const;
export type ReimbursementType = (typeof ReimbursementType)[keyof typeof ReimbursementType] | (string & {});

export const reimbursementTypeSchema: EnumSchema<ReimbursementType> =
  s.enumOf<ReimbursementType>(ReimbursementType);
