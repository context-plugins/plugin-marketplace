import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { content1InternalSchema, content1Schema, type Content1 } from "./content1.js";

export type ApiV1ConversationsPrivateReplyRequest = {
  teamId: string;
  fetchedCommentId: string;
  content: Content1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ConversationsPrivateReplyRequestProperties: s.Shape<ApiV1ConversationsPrivateReplyRequest> = {
  teamId: s.string(),
  fetchedCommentId: s.string(),
  content: content1InternalSchema,
};

export const apiV1ConversationsPrivateReplyRequestInternalSchema: Schema<ApiV1ConversationsPrivateReplyRequest> =
  s.object<ApiV1ConversationsPrivateReplyRequest>(apiV1ConversationsPrivateReplyRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ConversationsPrivateReplyRequestSchema: Schema<ApiV1ConversationsPrivateReplyRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ConversationsPrivateReplyRequest>(
      {
        ...apiV1ConversationsPrivateReplyRequestProperties,
        content: content1Schema,
      },
      { additionalProperties: s.json() },
    ),
  );
