import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The transfer scheme to be used for the transfer. The transfer scheme determines the processing
 * time and method of the transfer.
 */
export const TransferSchemeType = {
  SepaCreditInst: "sepa-credit-inst",
  SepaCredit: "sepa-credit",
} as const;
export type TransferSchemeType = (typeof TransferSchemeType)[keyof typeof TransferSchemeType] | (string & {});

export const transferSchemeTypeSchema: EnumSchema<TransferSchemeType> =
  s.enumOf<TransferSchemeType>(TransferSchemeType);
