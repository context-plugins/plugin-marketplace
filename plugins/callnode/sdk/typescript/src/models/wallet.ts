import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Wallet = {
  previousBalance?: number;
  newBalance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const walletSchema: Schema<Wallet> = s.object<Wallet>(
  {
    previousBalance: s.optional(s.float64()),
    newBalance: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
