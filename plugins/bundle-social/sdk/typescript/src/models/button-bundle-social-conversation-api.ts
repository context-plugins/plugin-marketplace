import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ButtonBundleSocialConversationApi = {
  id?: string;
  /** @default "POSTBACK" */
  type?: "POSTBACK";
  label: string;
  payload: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buttonBundleSocialConversationApiProperties: s.Shape<ButtonBundleSocialConversationApi> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("POSTBACK"), "POSTBACK"),
  label: s.string(),
  payload: s.string(),
};

export const buttonBundleSocialConversationApiInternalSchema: Schema<ButtonBundleSocialConversationApi> =
  s.object<ButtonBundleSocialConversationApi>(buttonBundleSocialConversationApiProperties, {
    additionalProperties: s.json(),
  });

export const buttonBundleSocialConversationApiSchema: Schema<ButtonBundleSocialConversationApi> =
  s.lazySchema(() =>
    s.object<ButtonBundleSocialConversationApi>(
      {
        ...buttonBundleSocialConversationApiProperties,
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
        label: s.string().check(s.minLength(1), s.maxLength(20)),
        payload: s.string().check(s.minLength(1), s.maxLength(1000)),
      },
      { additionalProperties: s.json() },
    ),
  );
