import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSchema, type Build } from "./build.js";

export type ProjectDetail = {
  id?: number;
  name?: string;
  groupId?: number;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  subGroupId?: number | null;
  builds?: Build[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectDetailSchema: Schema<ProjectDetail> = s.object<ProjectDetail>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    groupId: s.optional(s.int()),
    userId: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    subGroupId: s.optionalNullable(s.int()),
    builds: s.optional(s.array(s.lazy(() => buildSchema))),
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
