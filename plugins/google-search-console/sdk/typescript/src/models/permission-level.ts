import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The user's permission level for the site. */
export const PermissionLevel = {
  SitePermissionLevelUnspecified: "SITE_PERMISSION_LEVEL_UNSPECIFIED",
  SiteOwner: "SITE_OWNER",
  SiteFullUser: "SITE_FULL_USER",
  SiteRestrictedUser: "SITE_RESTRICTED_USER",
  SiteUnverifiedUser: "SITE_UNVERIFIED_USER",
} as const;
export type PermissionLevel = (typeof PermissionLevel)[keyof typeof PermissionLevel] | (string & {});

export const permissionLevelSchema: EnumSchema<PermissionLevel> = s.enumOf<PermissionLevel>(PermissionLevel);
