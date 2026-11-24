import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeveloperBalanceWalletSchema,
  type GoogleCloudApigeeV1DeveloperBalanceWallet,
} from "./google-cloud-apigee-v1-developer-balance-wallet.js";

/** Account balance for the developer. */
export type GoogleCloudApigeeV1DeveloperBalance = {
  /**
   * Output only. List of all wallets. Each individual wallet stores the account balance for a
   * particular currency.
   */
  wallets?: GoogleCloudApigeeV1DeveloperBalanceWallet[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperBalanceSchema: Schema<GoogleCloudApigeeV1DeveloperBalance> =
  s.object<GoogleCloudApigeeV1DeveloperBalance>(
    {
      wallets: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DeveloperBalanceWalletSchema))),
    },
    { additionalProperties: s.json() },
  );
