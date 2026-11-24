import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney3Schema, type GoogleTypeMoney3 } from "./google-type-money3.js";

/** Wallet used to manage an account balance for a particular currency. */
export type GoogleCloudApigeeV1AppGroupBalanceWallet = {
  /**
   * Output only. Time at which the AppGroup last added credit to the account in milliseconds since
   * epoch.
   */
  lastCreditTime?: string;
  /** Current remaining balance of the AppGroup for a particular currency. */
  balance?: GoogleTypeMoney3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupBalanceWalletSchema: Schema<GoogleCloudApigeeV1AppGroupBalanceWallet> =
  s.object<GoogleCloudApigeeV1AppGroupBalanceWallet>(
    {
      lastCreditTime: s.optional(s.string()),
      balance: s.optional(s.lazy(() => googleTypeMoney3Schema)),
    },
    { additionalProperties: s.json() },
  );
