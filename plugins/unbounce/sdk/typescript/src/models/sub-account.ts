import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubAccount = {
  id?: string;
  name?: string;
  accountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subAccountSchema: Schema<SubAccount> = s.object<SubAccount>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    accountId: s.optional(s.string()),
    _keysMap: {
      accountId: "account_id",
    },
  },
  { additionalProperties: s.json() },
);
