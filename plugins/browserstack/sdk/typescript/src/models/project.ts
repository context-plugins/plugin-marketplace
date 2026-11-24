import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Project = {
  id?: number;
  name?: string;
  groupId?: number;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  subGroupId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSchema: Schema<Project> = s.object<Project>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    groupId: s.optional(s.int()),
    userId: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    subGroupId: s.optionalNullable(s.int()),
    _keysMap: {
      groupId: "group_id",
      userId: "user_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      subGroupId: "sub_group_id",
    },
  },
  { additionalProperties: s.json() },
);
