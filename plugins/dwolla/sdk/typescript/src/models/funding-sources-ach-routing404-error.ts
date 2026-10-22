import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundingSourcesAchRouting404Error = {
  code?: string;
  message?: string;
};

export const fundingSourcesAchRouting404ErrorSchema: Schema<FundingSourcesAchRouting404Error> =
  s.object<FundingSourcesAchRouting404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
