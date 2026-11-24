import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";
import {
  instagramConnectionMethodSchema,
  type InstagramConnectionMethod,
} from "./instagram-connection-method.js";
import { MessagingStatus, messagingStatusSchema } from "./messaging-status.js";
import { twitterSubTypeSchema, type TwitterSubType } from "./twitter-sub-type.js";
import { typeSchema, type Type } from "./type.js";

export type ItemBundleSocialSocialAccountApi = {
  id: string;
  type: Type;
  teamId: string;
  username?: string | null;
  displayName?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  externalId?: string | null;
  providerPageId?: string | null;
  userUsername?: string | null;
  userDisplayName?: string | null;
  userEmail?: string | null;
  userId?: string | null;
  channels?: Channel[] | null;
  mastodonServerId?: string | null;
  instagramConnectionMethod?: InstagramConnectionMethod | null;
  twitterSubType?: TwitterSubType | null;
  isTiktokBusinessAccount?: boolean | null;
  disconnectedCheckTryAt?: Date | null;
  deleteOn?: Date | null;
  /** @default MessagingStatus.Disabled */
  messagingStatus?: MessagingStatus;
  messagingStatusUpdatedAt?: Date | null;
  messagingLastError?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemBundleSocialSocialAccountApiSchema: Schema<ItemBundleSocialSocialAccountApi> =
  s.object<ItemBundleSocialSocialAccountApi>(
    {
      id: s.string(),
      type: typeSchema,
      teamId: s.string(),
      username: s.optionalNullable(s.string()),
      displayName: s.optionalNullable(s.string()),
      bio: s.optionalNullable(s.string()),
      avatarUrl: s.optionalNullable(s.string()),
      externalId: s.optionalNullable(s.string()),
      providerPageId: s.optionalNullable(s.string()),
      userUsername: s.optionalNullable(s.string()),
      userDisplayName: s.optionalNullable(s.string()),
      userEmail: s.optionalNullable(s.string()),
      userId: s.optionalNullable(s.string()),
      channels: s.optionalNullable(s.array(s.lazy(() => channelSchema))),
      mastodonServerId: s.optionalNullable(s.string()),
      instagramConnectionMethod: s.optionalNullable(s.lazy(() => instagramConnectionMethodSchema)),
      twitterSubType: s.optionalNullable(s.lazy(() => twitterSubTypeSchema)),
      isTiktokBusinessAccount: s.optionalNullable(s.boolean()),
      disconnectedCheckTryAt: s.optionalNullable(s.dateTime()),
      deleteOn: s.optionalNullable(s.dateTime()),
      messagingStatus: s.defaulted(messagingStatusSchema, MessagingStatus.Disabled),
      messagingStatusUpdatedAt: s.optionalNullable(s.dateTime()),
      messagingLastError: s.optionalNullable(s.string()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
