import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the type of the party. At the moment, only `organization` is supported. */
export const BalanceTransferPartyType = {
  Organization: "organization",
} as const;
export type BalanceTransferPartyType =
  | (typeof BalanceTransferPartyType)[keyof typeof BalanceTransferPartyType]
  | (string & {});

export const balanceTransferPartyTypeSchema: EnumSchema<BalanceTransferPartyType> =
  s.enumOf<BalanceTransferPartyType>(BalanceTransferPartyType);
