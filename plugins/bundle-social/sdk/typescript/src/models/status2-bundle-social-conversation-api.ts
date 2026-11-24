import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2BundleSocialConversationApi = {
  Synced: "SYNCED",
  SyncFailed: "SYNC_FAILED",
  Unsupported: "UNSUPPORTED",
} as const;
export type Status2BundleSocialConversationApi =
  | (typeof Status2BundleSocialConversationApi)[keyof typeof Status2BundleSocialConversationApi]
  | (string & {});

export const status2BundleSocialConversationApiSchema: EnumSchema<Status2BundleSocialConversationApi> =
  s.enumOf<Status2BundleSocialConversationApi>(Status2BundleSocialConversationApi);
