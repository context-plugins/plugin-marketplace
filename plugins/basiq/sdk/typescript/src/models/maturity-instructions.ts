import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current instructions on action to be taken at maturity. This includes default actions that may be
 * specified in the terms and conditions for the product e.g. roll-over to the same term and
 * frequency of interest payments.
 */
export const MaturityInstructions = {
  HoldOnMaturity: "HOLD_ON_MATURITY",
  PaidOutAtMaturity: "PAID_OUT_AT_MATURITY",
  RolledOver: "ROLLED_OVER",
} as const;
export type MaturityInstructions =
  | (typeof MaturityInstructions)[keyof typeof MaturityInstructions]
  | (string & {});

export const maturityInstructionsSchema: EnumSchema<MaturityInstructions> =
  s.enumOf<MaturityInstructions>(MaturityInstructions);
