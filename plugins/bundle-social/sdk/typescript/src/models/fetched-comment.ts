import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformData2Schema, type PlatformData2 } from "./platform-data2.js";
import { platform32Schema, type Platform32 } from "./platform32.js";

export type FetchedComment = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  postId?: string | null;
  importedPostId?: string | null;
  socialAccountId: string;
  importId: string;
  platform: Platform32;
  externalId: string;
  externalParentId?: string | null;
  externalPostId?: string | null;
  authorName?: string | null;
  authorExternalId?: string | null;
  authorProfileUrl?: string | null;
  authorAvatarUrl?: string | null;
  text?: string | null;
  likesCount: number;
  repliesCount: number;
  platformData?: PlatformData2;
  publishedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchedCommentSchema: Schema<FetchedComment> = s.object<FetchedComment>(
  {
    id: s.string(),
    teamId: s.string(),
    organizationId: s.optionalNullable(s.string()),
    postId: s.optionalNullable(s.string()),
    importedPostId: s.optionalNullable(s.string()),
    socialAccountId: s.string(),
    importId: s.string(),
    platform: platform32Schema,
    externalId: s.string(),
    externalParentId: s.optionalNullable(s.string()),
    externalPostId: s.optionalNullable(s.string()),
    authorName: s.optionalNullable(s.string()),
    authorExternalId: s.optionalNullable(s.string()),
    authorProfileUrl: s.optionalNullable(s.string()),
    authorAvatarUrl: s.optionalNullable(s.string()),
    text: s.optionalNullable(s.string()),
    likesCount: s.float64(),
    repliesCount: s.float64(),
    platformData: s.optional(s.lazy(() => platformData2Schema)),
    publishedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
