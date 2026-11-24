import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item = {
  id: string;
  socialAccountId: string;
  impressions: number;
  impressionsUnique: number;
  views: number;
  viewsUnique: number;
  likes: number;
  comments: number;
  postCount: number;
  followers: number;
  following: number;
  forced: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    id: s.string(),
    socialAccountId: s.string(),
    impressions: s.float64(),
    impressionsUnique: s.float64(),
    views: s.float64(),
    viewsUnique: s.float64(),
    likes: s.float64(),
    comments: s.float64(),
    postCount: s.float64(),
    followers: s.float64(),
    following: s.float64(),
    forced: s.boolean(),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
