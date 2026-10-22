import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsMassPayments403Error = {
  code?: string;
  message?: string;
};

export const accountsMassPayments403ErrorSchema: Schema<AccountsMassPayments403Error> =
  s.object<AccountsMassPayments403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
