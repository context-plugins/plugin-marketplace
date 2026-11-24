import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  buttonBundleSocialConversationApiInternalSchema,
  buttonBundleSocialConversationApiSchema,
  type ButtonBundleSocialConversationApi,
} from "../button-bundle-social-conversation-api.js";
import {
  button1BundleSocialConversationApiInternalSchema,
  button1BundleSocialConversationApiSchema,
  type Button1BundleSocialConversationApi,
} from "../button1-bundle-social-conversation-api.js";
import {
  button2BundleSocialConversationApiInternalSchema,
  button2BundleSocialConversationApiSchema,
  type Button2BundleSocialConversationApi,
} from "../button2-bundle-social-conversation-api.js";

export type Button3BundleSocialConversationApi =
  | ButtonBundleSocialConversationApi
  | Button1BundleSocialConversationApi
  | Button2BundleSocialConversationApi;

export const button3BundleSocialConversationApiInternalSchema: Schema<Button3BundleSocialConversationApi> =
  s.of<Button3BundleSocialConversationApi>(
    s.union([
      s.lazy(() => buttonBundleSocialConversationApiInternalSchema),
      s.lazy(() => button1BundleSocialConversationApiInternalSchema),
      s.lazy(() => button2BundleSocialConversationApiInternalSchema),
    ]),
  );

export const button3BundleSocialConversationApiSchema: Schema<Button3BundleSocialConversationApi> =
  s.lazySchema(() =>
    s.of<Button3BundleSocialConversationApi>(
      s.union([
        s.lazy(() => buttonBundleSocialConversationApiSchema),
        s.lazy(() => button1BundleSocialConversationApiSchema),
        s.lazy(() => button2BundleSocialConversationApiSchema),
      ]),
    ),
  );
