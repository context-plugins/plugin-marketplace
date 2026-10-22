import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A user's account in a connected app. */
export type PlatformUserDatasourceProfile = {
  /** Datasource of the account, for example slack or github. */
  datasource: string;
  /** The account's handle or display name in the app. */
  handle: string;
  /**
   * The app's own ID for the account. Present only when Glean knows it, for example the Slack user
   * ID.
   */
  accountId?: string;
  /** Web URL of the account's profile. */
  profileUrl?: string;
};

export const platformUserDatasourceProfileSchema: Schema<PlatformUserDatasourceProfile> =
  s.object<PlatformUserDatasourceProfile>({
    datasource: s.string(),
    handle: s.string(),
    accountId: s.optional(s.string()),
    profileUrl: s.optional(s.string()),
    _keysMap: {
      accountId: "account_id",
      profileUrl: "profile_url",
    },
  });
