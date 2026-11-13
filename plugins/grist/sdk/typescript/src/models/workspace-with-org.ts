import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { orgSchema, type Org } from "./org.js";

export type WorkspaceWithOrg = {
  id: number;
  name: string;
  access: Access;
  org: Org;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceWithOrgSchema: Schema<WorkspaceWithOrg> = s.object<WorkspaceWithOrg>(
  {
    id: s.int(),
    name: s.string(),
    access: accessSchema,
    org: orgSchema,
  },
  { additionalProperties: s.json() },
);
