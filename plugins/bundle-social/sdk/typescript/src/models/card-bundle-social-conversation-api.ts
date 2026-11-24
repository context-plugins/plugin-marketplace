import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  button3BundleSocialConversationApiInternalSchema,
  button3BundleSocialConversationApiSchema,
  type Button3BundleSocialConversationApi,
} from "./unions/button3-bundle-social-conversation-api.js";

export type CardBundleSocialConversationApi = {
  id?: string;
  title: string;
  subtitle?: string | null;
  imageUrl?: string | null;
  buttons?: Button3BundleSocialConversationApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardBundleSocialConversationApiProperties: s.Shape<CardBundleSocialConversationApi> = {
  id: s.optional(s.string()),
  title: s.string(),
  subtitle: s.optionalNullable(s.string()),
  imageUrl: s.optionalNullable(s.string()),
  buttons: s.optional(s.array(s.lazy(() => button3BundleSocialConversationApiInternalSchema))),
};

export const cardBundleSocialConversationApiInternalSchema: Schema<CardBundleSocialConversationApi> =
  s.object<CardBundleSocialConversationApi>(cardBundleSocialConversationApiProperties, {
    additionalProperties: s.json(),
  });

export const cardBundleSocialConversationApiSchema: Schema<CardBundleSocialConversationApi> = s.lazySchema(
  () =>
    s.object<CardBundleSocialConversationApi>(
      {
        ...cardBundleSocialConversationApiProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
        title: s.string().check(s.minLength(1), s.maxLength(80)),
        subtitle: s.optionalNullable(s.string().check(s.maxLength(80))),
        imageUrl: s.optionalNullable(s.string().check(s.url())),
        buttons: s.optional(
          s.array(s.lazy(() => button3BundleSocialConversationApiSchema)).check(s.maxLength(3)),
        ),
      },
      { additionalProperties: s.json() },
    ),
);
