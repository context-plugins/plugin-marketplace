import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maturityInstructionsSchema, type MaturityInstructions } from "./maturity-instructions.js";

export type TermDeposit = {
  /** The lodgement date of the original deposit. */
  lodgementDate: string;
  /** Maturity date for the term deposit. */
  maturityDate: string;
  /**
   * Amount to be paid upon maturity. If absent, it implies the amount to paid is variable and
   * cannot currently be calculated.
   */
  maturityAmount?: string;
  /** If absent assumes AUD. */
  maturityCurrency?: string;
  /**
   * Current instructions on action to be taken at maturity. This includes default actions that may
   * be specified in the terms and conditions for the product e.g. roll-over to the same term and
   * frequency of interest payments.
   */
  maturityInstructions: MaturityInstructions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const termDepositSchema: Schema<TermDeposit> = s.object<TermDeposit>(
  {
    lodgementDate: s.string(),
    maturityDate: s.string(),
    maturityAmount: s.optional(s.string()),
    maturityCurrency: s.optional(s.string()),
    maturityInstructions: maturityInstructionsSchema,
  },
  { additionalProperties: s.json() },
);
