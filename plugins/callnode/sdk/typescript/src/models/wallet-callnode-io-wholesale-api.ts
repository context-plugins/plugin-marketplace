import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WalletCallnodeIoWholesaleApi = {
  balance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const walletCallnodeIoWholesaleApiSchema: Schema<WalletCallnodeIoWholesaleApi> =
  s.object<WalletCallnodeIoWholesaleApi>(
    {
      balance: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
