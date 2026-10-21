import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./unions/active.js";
import { displayNameSchema, type DisplayName } from "./unions/display-name.js";
import { merchantAccountIdsSchema, type MerchantAccountIds } from "./unions/merchant-account-ids.js";
import { roleIdsSchema, type RoleIds } from "./unions/role-ids.js";

export type ApiKeyPairUpdate = {
  /** The display name for the API key pair. */
  displayName?: DisplayName;
  /** Whether the API key pair is active and can be used to authenticate. */
  active?: Active;
  roleIds?: RoleIds;
  /**
   * The IDs of the merchant accounts to associate with the API key pair. The caller can only assign
   * merchant accounts it has access to.
   */
  merchantAccountIds?: MerchantAccountIds;
};

export const apiKeyPairUpdateSchema: Schema<ApiKeyPairUpdate> = s.object<ApiKeyPairUpdate>({
  displayName: s.optional(s.lazy(() => displayNameSchema)),
  active: s.optional(s.lazy(() => activeSchema)),
  roleIds: s.optional(s.lazy(() => roleIdsSchema)),
  merchantAccountIds: s.optional(s.lazy(() => merchantAccountIdsSchema)),
  _keysMap: {
    displayName: "display_name",
    roleIds: "role_ids",
    merchantAccountIds: "merchant_account_ids",
  },
});
