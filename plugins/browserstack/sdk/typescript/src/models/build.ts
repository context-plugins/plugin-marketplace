import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Build = {
  hashedId?: string;
  name?: string;
  duration?: number;
  status?: string;
  tags?: string[];
  groupId?: number;
  userId?: number;
  automationProjectId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildSchema: Schema<Build> = s.object<Build>(
  {
    hashedId: s.optional(s.string()),
    name: s.optional(s.string()),
    duration: s.optional(s.int()),
    status: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    groupId: s.optional(s.int()),
    userId: s.optional(s.int()),
    automationProjectId: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      hashedId: "hashed_id",
      groupId: "group_id",
      userId: "user_id",
      automationProjectId: "automation_project_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
