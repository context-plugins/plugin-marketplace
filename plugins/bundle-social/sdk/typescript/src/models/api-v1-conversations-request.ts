import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBundleSocialConversationApiSchema,
  type StatusBundleSocialConversationApi,
} from "./status-bundle-social-conversation-api.js";

export type ApiV1ConversationsRequest = {
  status: StatusBundleSocialConversationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ConversationsRequestSchema: Schema<ApiV1ConversationsRequest> =
  s.object<ApiV1ConversationsRequest>(
    {
      status: statusBundleSocialConversationApiSchema,
    },
    { additionalProperties: s.json() },
  );
