import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Funding account wallet permission response. */
export type WalletPermission = {
  /** This field is set as `true` if you have access to Wallet (BILL balance) as a payment method */
  fundingEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const walletPermissionSchema: Schema<WalletPermission> = s.object<WalletPermission>(
  {
    fundingEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
