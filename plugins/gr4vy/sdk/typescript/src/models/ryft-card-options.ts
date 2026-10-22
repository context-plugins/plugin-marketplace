import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformFeeSchema, type PlatformFee } from "./unions/platform-fee.js";
import { subAccountIdSchema, type SubAccountId } from "./unions/sub-account-id.js";

export type RyftCardOptions = {
  /** Ryft linked sub-account ID, sent as the `Account` header. */
  subAccountId?: SubAccountId;
  /**
   * Platform Fee in the transaction currency's smallest unit. Sent as Ryft's `platformFee` field.
   */
  platformFee?: PlatformFee;
};

export const ryftCardOptionsSchema: Schema<RyftCardOptions> = s.object<RyftCardOptions>({
  subAccountId: s.optional(s.lazy(() => subAccountIdSchema)),
  platformFee: s.optional(s.lazy(() => platformFeeSchema)),
  _keysMap: {
    subAccountId: "sub_account_id",
    platformFee: "platform_fee",
  },
});
