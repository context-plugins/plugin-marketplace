import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VirtualAccountsRequest1 = {
  /** New expected amount in paise. */
  amount?: number;
  /** New close timestamp. Maximum: 2147483647. */
  closeBy?: number;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualAccountsRequest1Schema: Schema<VirtualAccountsRequest1> =
  s.object<VirtualAccountsRequest1>(
    {
      amount: s.optional(s.int()),
      closeBy: s.optional(s.int()),
      description: s.optional(s.string()),
      _keysMap: {
        closeBy: "close_by",
      },
    },
    { additionalProperties: s.json() },
  );
