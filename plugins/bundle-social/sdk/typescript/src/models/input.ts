import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";
import {
  typeBundleSocialAutomationApiSchema,
  type TypeBundleSocialAutomationApi,
} from "./type-bundle-social-automation-api.js";

export type Input = {
  type?: TypeBundleSocialAutomationApi | null;
  platform?: Platform | null;
  socialAccountId?: string | null;
  postId?: string | null;
  conversationId?: string | null;
  conversationMessageId?: string | null;
  fetchedCommentId?: string | null;
  senderExternalId?: string | null;
  externalMessageId?: string | null;
  text?: string | null;
  payload?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, unknown>;
};

export const inputSchema: Schema<Input> = s.object<Input>(
  {
    type: s.optionalNullable(s.lazy(() => typeBundleSocialAutomationApiSchema)),
    platform: s.optionalNullable(s.lazy(() => platformSchema)),
    socialAccountId: s.optionalNullable(s.string()),
    postId: s.optionalNullable(s.string()),
    conversationId: s.optionalNullable(s.string()),
    conversationMessageId: s.optionalNullable(s.string()),
    fetchedCommentId: s.optionalNullable(s.string()),
    senderExternalId: s.optionalNullable(s.string()),
    externalMessageId: s.optionalNullable(s.string()),
    text: s.optionalNullable(s.string()),
    payload: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.unknown() },
);
