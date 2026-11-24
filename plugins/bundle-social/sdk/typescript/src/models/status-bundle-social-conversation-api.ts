import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialConversationApi = {
  Open: "OPEN",
  Archived: "ARCHIVED",
} as const;
export type StatusBundleSocialConversationApi =
  | (typeof StatusBundleSocialConversationApi)[keyof typeof StatusBundleSocialConversationApi]
  | (string & {});

export const statusBundleSocialConversationApiSchema: EnumSchema<StatusBundleSocialConversationApi> =
  s.enumOf<StatusBundleSocialConversationApi>(StatusBundleSocialConversationApi);
