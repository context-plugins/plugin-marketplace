import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformDataSchema, type PlatformData } from "./platform-data.js";
import { platform30Schema, type Platform30 } from "./platform30.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";
import {
  statusBundleSocialConversationApiSchema,
  type StatusBundleSocialConversationApi,
} from "./status-bundle-social-conversation-api.js";

export type ApiV1ConversationsReadResponse = {
  id: string;
  teamId: string;
  socialAccountId: string;
  /**
   * Messaging platform. Extensible: new platforms are added over time, so handle unknown values
   * gracefully rather than switching exhaustively.
   */
  platform: Platform30;
  externalConversationId?: string | null;
  externalParticipantId: string;
  participantUsername?: string | null;
  participantDisplayName?: string | null;
  participantAvatarUrl?: string | null;
  status: StatusBundleSocialConversationApi;
  lastMessageAt?: Date | null;
  lastActivityAt: Date | null;
  lastMessagePreview?: string | null;
  lastReadAt?: Date | null;
  unreadCount: number;
  platformSeenAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  platformData?: PlatformData;
  socialAccount?: SocialAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ConversationsReadResponseSchema: Schema<ApiV1ConversationsReadResponse> =
  s.object<ApiV1ConversationsReadResponse>(
    {
      id: s.string(),
      teamId: s.string(),
      socialAccountId: s.string(),
      platform: platform30Schema,
      externalConversationId: s.optionalNullable(s.string()),
      externalParticipantId: s.string(),
      participantUsername: s.optionalNullable(s.string()),
      participantDisplayName: s.optionalNullable(s.string()),
      participantAvatarUrl: s.optionalNullable(s.string()),
      status: statusBundleSocialConversationApiSchema,
      lastMessageAt: s.optionalNullable(s.dateTime()),
      lastActivityAt: s.nullable(s.dateTime()),
      lastMessagePreview: s.optionalNullable(s.string()),
      lastReadAt: s.optionalNullable(s.dateTime()),
      unreadCount: s.float64(),
      platformSeenAt: s.optionalNullable(s.dateTime()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      platformData: s.optional(s.lazy(() => platformDataSchema)),
      socialAccount: s.optional(s.lazy(() => socialAccountSchema)),
    },
    { additionalProperties: s.json() },
  );
