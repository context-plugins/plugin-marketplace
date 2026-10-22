import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundingSources404Error = {
  code?: string;
  message?: string;
};

export const fundingSources404ErrorSchema: Schema<FundingSources404Error> = s.object<FundingSources404Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
