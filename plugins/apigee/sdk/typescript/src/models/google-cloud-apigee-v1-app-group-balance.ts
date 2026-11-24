import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AppGroupBalanceWalletSchema,
  type GoogleCloudApigeeV1AppGroupBalanceWallet,
} from "./google-cloud-apigee-v1-app-group-balance-wallet.js";

/** AppGroupBalance for the AppGroup. */
export type GoogleCloudApigeeV1AppGroupBalance = {
  /**
   * Output only. List of all wallets. Each individual wallet stores the account balance for a
   * particular currency.
   */
  wallets?: GoogleCloudApigeeV1AppGroupBalanceWallet[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupBalanceSchema: Schema<GoogleCloudApigeeV1AppGroupBalance> =
  s.object<GoogleCloudApigeeV1AppGroupBalance>(
    {
      wallets: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AppGroupBalanceWalletSchema))),
    },
    { additionalProperties: s.json() },
  );
