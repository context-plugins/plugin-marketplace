import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type3BundleSocialConversationApiSchema,
  type Type3BundleSocialConversationApi,
} from "./type3-bundle-social-conversation-api.js";

export type AttachmentBundleSocialConversationApi = {
  type: Type3BundleSocialConversationApi;
  url?: string | null;
  externalId?: string | null;
  mimeType?: string | null;
  name?: string | null;
  captionTrackUrl?: string | null;
  captionLanguage?: string | null;
  captionLabel?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentBundleSocialConversationApiSchema: Schema<AttachmentBundleSocialConversationApi> =
  s.object<AttachmentBundleSocialConversationApi>(
    {
      type: type3BundleSocialConversationApiSchema,
      url: s.optionalNullable(s.string()),
      externalId: s.optionalNullable(s.string()),
      mimeType: s.optionalNullable(s.string()),
      name: s.optionalNullable(s.string()),
      captionTrackUrl: s.optionalNullable(s.string()),
      captionLanguage: s.optionalNullable(s.string()),
      captionLabel: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
