import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The transfer scheme to be used for the transfer. The transfer scheme determines the processing
 * time and method of the transfer.
 */
export const TransferSchemeTypeResponse = {
  SepaCreditInst: "sepa-credit-inst",
  SepaCredit: "sepa-credit",
} as const;
export type TransferSchemeTypeResponse =
  | (typeof TransferSchemeTypeResponse)[keyof typeof TransferSchemeTypeResponse]
  | (string & {});

export const transferSchemeTypeResponseSchema: EnumSchema<TransferSchemeTypeResponse> =
  s.enumOf<TransferSchemeTypeResponse>(TransferSchemeTypeResponse);
