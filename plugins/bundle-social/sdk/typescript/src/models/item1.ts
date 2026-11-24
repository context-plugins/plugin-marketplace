import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item1 = {
  id: string;
  profilePostId: string;
  impressions: number;
  impressionsUnique: number;
  views: number;
  viewsUnique: number;
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  saves: number;
  raw?: Record<string, unknown>;
  forced: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1Schema: Schema<Item1> = s.object<Item1>(
  {
    id: s.string(),
    profilePostId: s.string(),
    impressions: s.float64(),
    impressionsUnique: s.float64(),
    views: s.float64(),
    viewsUnique: s.float64(),
    likes: s.float64(),
    dislikes: s.float64(),
    comments: s.float64(),
    shares: s.float64(),
    saves: s.float64(),
    raw: s.optional(s.record(s.string(), s.unknown())),
    forced: s.boolean(),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
