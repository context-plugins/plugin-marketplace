import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceAccessWriteSchema, type WorkspaceAccessWrite } from "./workspace-access-write.js";

export type WorkspacesAccessRequest = {
  delta: WorkspaceAccessWrite;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesAccessRequestSchema: Schema<WorkspacesAccessRequest> =
  s.object<WorkspacesAccessRequest>(
    {
      delta: workspaceAccessWriteSchema,
    },
    { additionalProperties: s.json() },
  );
