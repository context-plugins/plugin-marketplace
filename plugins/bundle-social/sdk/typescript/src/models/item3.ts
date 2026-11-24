import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item3 = {
  id: string;
  profilePostId?: string | null;
  analyticsId?: string | null;
  raw?: Record<string, unknown>;
  forced: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item3Schema: Schema<Item3> = s.object<Item3>(
  {
    id: s.string(),
    profilePostId: s.optionalNullable(s.string()),
    analyticsId: s.optionalNullable(s.string()),
    raw: s.optional(s.record(s.string(), s.unknown())),
    forced: s.boolean(),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
