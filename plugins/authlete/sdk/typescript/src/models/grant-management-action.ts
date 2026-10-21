import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The grant management action of the device authorization request.
 *
 * The `grant_management_action` request parameter is defined in [Grant Management for OAuth
 * 2.0](https://openid.net/specs/fapi-grant-management.html).
 */
export const GrantManagementAction = {
  Create: "CREATE",
  Query: "QUERY",
  Replace: "REPLACE",
  Revoke: "REVOKE",
  Merge: "MERGE",
} as const;
export type GrantManagementAction =
  | (typeof GrantManagementAction)[keyof typeof GrantManagementAction]
  | (string & {});

export const grantManagementActionSchema: EnumSchema<GrantManagementAction> =
  s.enumOf<GrantManagementAction>(GrantManagementAction);
