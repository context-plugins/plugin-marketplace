import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the type of the party. At the moment, only `organization` is supported. */
export const BalanceTransferPartyTypeResponse = {
  Organization: "organization",
} as const;
export type BalanceTransferPartyTypeResponse =
  | (typeof BalanceTransferPartyTypeResponse)[keyof typeof BalanceTransferPartyTypeResponse]
  | (string & {});

export const balanceTransferPartyTypeResponseSchema: EnumSchema<BalanceTransferPartyTypeResponse> =
  s.enumOf<BalanceTransferPartyTypeResponse>(BalanceTransferPartyTypeResponse);
