import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button2BundleSocialConversationApi = {
  id?: string;
  /** @default "PHONE" */
  type?: "PHONE";
  label: string;
  phoneNumber: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button2BundleSocialConversationApiProperties: s.Shape<Button2BundleSocialConversationApi> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("PHONE"), "PHONE"),
  label: s.string(),
  phoneNumber: s.string(),
};

export const button2BundleSocialConversationApiInternalSchema: Schema<Button2BundleSocialConversationApi> =
  s.object<Button2BundleSocialConversationApi>(button2BundleSocialConversationApiProperties, {
    additionalProperties: s.json(),
  });

export const button2BundleSocialConversationApiSchema: Schema<Button2BundleSocialConversationApi> =
  s.lazySchema(() =>
    s.object<Button2BundleSocialConversationApi>(
      {
        ...button2BundleSocialConversationApiProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
        label: s.string().check(s.minLength(1), s.maxLength(20)),
        phoneNumber: s.string().check(s.minLength(3), s.maxLength(30)),
      },
      { additionalProperties: s.json() },
    ),
  );
