import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QuickReplyBundleSocialConversationApi = {
  id?: string;
  label: string;
  payload: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const quickReplyBundleSocialConversationApiProperties: s.Shape<QuickReplyBundleSocialConversationApi> = {
  id: s.optional(s.string()),
  label: s.string(),
  payload: s.string(),
};

export const quickReplyBundleSocialConversationApiInternalSchema: Schema<QuickReplyBundleSocialConversationApi> =
  s.object<QuickReplyBundleSocialConversationApi>(quickReplyBundleSocialConversationApiProperties, {
    additionalProperties: s.json(),
  });

export const quickReplyBundleSocialConversationApiSchema: Schema<QuickReplyBundleSocialConversationApi> =
  s.lazySchema(() =>
    s.object<QuickReplyBundleSocialConversationApi>(
      {
        ...quickReplyBundleSocialConversationApiProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
        label: s.string().check(s.minLength(1), s.maxLength(20)),
        payload: s.string().check(s.minLength(1), s.maxLength(1000)),
      },
      { additionalProperties: s.json() },
    ),
  );
