import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user that another user reports to. */
export type PlatformUserManager = {
  /** Opaque canonical Glean user ID of the manager. */
  userId: string;
  /** The name that Glean shows for the manager. */
  displayName: string;
};

export const platformUserManagerSchema: Schema<PlatformUserManager> = s.object<PlatformUserManager>({
  userId: s.string(),
  displayName: s.string(),
  _keysMap: {
    userId: "user_id",
    displayName: "display_name",
  },
});
