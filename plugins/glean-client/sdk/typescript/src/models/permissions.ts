import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Describes the permissions levels that a user has for permissioned features. When the client sends
 * this, Permissions.read and Permissions.write are the additional permissions granted to a user on
 * top of what they have via their roles. When the server sends this, Permissions.read and
 * Permissions.write are the complete (merged) set of permissions the user has, and
 * Permissions.roles is just for display purposes.
 */
export type Permissions = {
  /**
   * TODO--deprecate in favor of the read and write properties. True if the user has access to
   * /adminsearch
   */
  canAdminSearch?: boolean;
  /**
   * TODO--deprecate in favor of the read and write properties. True if the user can administrate
   * client API tokens with global scope
   */
  canAdminClientApiGlobalTokens?: boolean;
  /**
   * TODO--deprecate in favor of the read and write properties. True if the user has access to data
   * loss prevention (DLP) features
   */
  canDlp?: boolean;
  /**
   * Describes the read permission levels that a user has for permissioned features. Key must be
   * PermissionedFeatureOrObject
   */
  read?: Record<string, Record<string, unknown>>;
  /**
   * Describes the write permissions levels that a user has for permissioned features. Key must be
   * PermissionedFeatureOrObject
   */
  write?: Record<string, Record<string, unknown>>;
  /**
   * Describes the grant permission levels that a user has for permissioned features. Key must be
   * PermissionedFeatureOrObject
   */
  grant?: Record<string, Record<string, unknown>>;
  /** The roleId of the canonical role a user has. The displayName is equal to the roleId. */
  role?: string;
  /** The roleIds of the roles a user has. */
  roles?: string[];
};

export const permissionsSchema: Schema<Permissions> = s.object<Permissions>({
  canAdminSearch: s.optional(s.boolean()),
  canAdminClientApiGlobalTokens: s.optional(s.boolean()),
  canDlp: s.optional(s.boolean()),
  read: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  write: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  grant: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  role: s.optional(s.string()),
  roles: s.optional(s.array(s.string())),
});
