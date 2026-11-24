import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import {
  status2BundleSocialConversationApiSchema,
  type Status2BundleSocialConversationApi,
} from "./status2-bundle-social-conversation-api.js";

export type ProviderStateSyncBundleSocialConversationApi = {
  action: Action;
  status: Status2BundleSocialConversationApi;
  reason?: string | null;
  error?: string | null;
  syncedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const providerStateSyncBundleSocialConversationApiSchema: Schema<ProviderStateSyncBundleSocialConversationApi> =
  s.object<ProviderStateSyncBundleSocialConversationApi>(
    {
      action: actionSchema,
      status: status2BundleSocialConversationApiSchema,
      reason: s.optionalNullable(s.string()),
      error: s.optionalNullable(s.string()),
      syncedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
