import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

export type ProfilePost = {
  id: string;
  socialAccountId: string;
  postId?: string | null;
  externalId?: string | null;
  title?: string | null;
  description?: string | null;
  smallThumbnail?: string | null;
  thumbnail?: string | null;
  permalink?: string | null;
  extraData?: Record<string, unknown>;
  subreddit?: string | null;
  publishedAt?: Date | null;
  type: Type7;
  internal: boolean;
  importedAt?: Date | null;
  externallyDeletedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profilePostSchema: Schema<ProfilePost> = s.object<ProfilePost>(
  {
    id: s.string(),
    socialAccountId: s.string(),
    postId: s.optionalNullable(s.string()),
    externalId: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    smallThumbnail: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    extraData: s.optional(s.record(s.string(), s.unknown())),
    subreddit: s.optionalNullable(s.string()),
    publishedAt: s.optionalNullable(s.dateTime()),
    type: type7Schema,
    internal: s.boolean(),
    importedAt: s.optionalNullable(s.dateTime()),
    externallyDeletedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
