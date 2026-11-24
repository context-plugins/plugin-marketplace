import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button1BundleSocialConversationApi = {
  id?: string;
  /** @default "URL" */
  type?: "URL";
  label: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button1BundleSocialConversationApiProperties: s.Shape<Button1BundleSocialConversationApi> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("URL"), "URL"),
  label: s.string(),
  url: s.string(),
};

export const button1BundleSocialConversationApiInternalSchema: Schema<Button1BundleSocialConversationApi> =
  s.object<Button1BundleSocialConversationApi>(button1BundleSocialConversationApiProperties, {
    additionalProperties: s.json(),
  });

export const button1BundleSocialConversationApiSchema: Schema<Button1BundleSocialConversationApi> =
  s.lazySchema(() =>
    s.object<Button1BundleSocialConversationApi>(
      {
        ...button1BundleSocialConversationApiProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
        label: s.string().check(s.minLength(1), s.maxLength(20)),
        url: s.string().check(s.url()),
      },
      { additionalProperties: s.json() },
    ),
  );
