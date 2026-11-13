import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceRoleSchema, type WorkspaceRole } from "./workspace-role.js";

export type Body17 = {
  /** Updated role for the user. */
  role: WorkspaceRole;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body17Schema: Schema<Body17> = s.object<Body17>(
  {
    role: workspaceRoleSchema,
  },
  { additionalProperties: s.json() },
);
