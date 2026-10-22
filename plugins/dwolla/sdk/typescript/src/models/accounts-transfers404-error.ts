import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsTransfers404Error = {
  code?: string;
  message?: string;
};

export const accountsTransfers404ErrorSchema: Schema<AccountsTransfers404Error> =
  s.object<AccountsTransfers404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
