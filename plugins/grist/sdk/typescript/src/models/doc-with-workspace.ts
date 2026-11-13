import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { workspaceWithOrgSchema, type WorkspaceWithOrg } from "./workspace-with-org.js";

export type DocWithWorkspace = {
  id: string;
  name: string;
  access: Access;
  isPinned: boolean;
  urlId: string | null;
  workspace: WorkspaceWithOrg;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docWithWorkspaceSchema: Schema<DocWithWorkspace> = s.object<DocWithWorkspace>(
  {
    id: s.string(),
    name: s.string(),
    access: accessSchema,
    isPinned: s.boolean(),
    urlId: s.nullable(s.string()),
    workspace: workspaceWithOrgSchema,
  },
  { additionalProperties: s.json() },
);
