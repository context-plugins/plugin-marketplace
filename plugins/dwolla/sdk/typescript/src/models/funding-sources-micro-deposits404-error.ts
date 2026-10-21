import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundingSourcesMicroDeposits404Error = {
  code?: string;
  message?: string;
};

export const fundingSourcesMicroDeposits404ErrorSchema: Schema<FundingSourcesMicroDeposits404Error> =
  s.object<FundingSourcesMicroDeposits404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
