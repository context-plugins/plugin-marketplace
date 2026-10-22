import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FundingSources403Error = {
  code?: string;
  message?: string;
};

export const fundingSources403ErrorSchema: Schema<FundingSources403Error> = s.object<FundingSources403Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
