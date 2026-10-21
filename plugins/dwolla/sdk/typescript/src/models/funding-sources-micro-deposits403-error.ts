import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundingSourcesMicroDeposits403Error = {
  code?: string;
  message?: string;
};

export const fundingSourcesMicroDeposits403ErrorSchema: Schema<FundingSourcesMicroDeposits403Error> =
  s.object<FundingSourcesMicroDeposits403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
