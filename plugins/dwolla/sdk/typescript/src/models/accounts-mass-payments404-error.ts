import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsMassPayments404Error = {
  code?: string;
  message?: string;
};

export const accountsMassPayments404ErrorSchema: Schema<AccountsMassPayments404Error> =
  s.object<AccountsMassPayments404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
