import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundingSourcesBalance404Error = {
  code?: string;
  message?: string;
};

export const fundingSourcesBalance404ErrorSchema: Schema<FundingSourcesBalance404Error> =
  s.object<FundingSourcesBalance404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
