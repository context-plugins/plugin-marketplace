import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The user's direct manager. Absent when the user has no manager or the manager is not in the
 * directory.
 */
export type PlatformUserManager1 = {
  /** Opaque canonical Glean user ID of the manager. */
  userId: string;
  /** The name that Glean shows for the manager. */
  displayName: string;
};

export const platformUserManager1Schema: Schema<PlatformUserManager1> = s.object<PlatformUserManager1>({
  userId: s.string(),
  displayName: s.string(),
  _keysMap: {
    userId: "user_id",
    displayName: "display_name",
  },
});
