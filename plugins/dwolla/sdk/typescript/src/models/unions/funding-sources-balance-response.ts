import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { bankBalanceResponseSchema, type BankBalanceResponse } from "../bank-balance-response.js";
import { dwollaBalanceResponseSchema, type DwollaBalanceResponse } from "../dwolla-balance-response.js";
import {
  settlementAccountBalanceResponseSchema,
  type SettlementAccountBalanceResponse,
} from "../settlement-account-balance-response.js";

export type FundingSourcesBalanceResponse =
  | DwollaBalanceResponse
  | BankBalanceResponse
  | SettlementAccountBalanceResponse;

export const fundingSourcesBalanceResponseSchema: Schema<FundingSourcesBalanceResponse> =
  s.of<FundingSourcesBalanceResponse>(
    s.union([
      s.lazy(() => dwollaBalanceResponseSchema),
      s.lazy(() => bankBalanceResponseSchema),
      s.lazy(() => settlementAccountBalanceResponseSchema),
    ]),
  );
