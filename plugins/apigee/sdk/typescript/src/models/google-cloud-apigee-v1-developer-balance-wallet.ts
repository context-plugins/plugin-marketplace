import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney8Schema, type GoogleTypeMoney8 } from "./google-type-money8.js";

/** Wallet used to manage an account balance for a particular currency. */
export type GoogleCloudApigeeV1DeveloperBalanceWallet = {
  /**
   * Output only. Time at which the developer last added credit to the account in milliseconds since
   * epoch.
   */
  lastCreditTime?: string;
  /** Current remaining balance of the developer for a particular currency. */
  balance?: GoogleTypeMoney8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperBalanceWalletSchema: Schema<GoogleCloudApigeeV1DeveloperBalanceWallet> =
  s.object<GoogleCloudApigeeV1DeveloperBalanceWallet>(
    {
      lastCreditTime: s.optional(s.string()),
      balance: s.optional(s.lazy(() => googleTypeMoney8Schema)),
    },
    { additionalProperties: s.json() },
  );
