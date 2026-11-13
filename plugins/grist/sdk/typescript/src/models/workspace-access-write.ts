import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { usersSchema, type Users } from "./users.js";

export type WorkspaceAccessWrite = {
  maxInheritedRole?: Access;
  users?: Record<string, Users>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceAccessWriteSchema: Schema<WorkspaceAccessWrite> = s.object<WorkspaceAccessWrite>(
  {
    maxInheritedRole: s.optional(s.lazy(() => accessSchema)),
    users: s.optional(
      s.record(
        s.string(),
        s.lazy(() => usersSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
