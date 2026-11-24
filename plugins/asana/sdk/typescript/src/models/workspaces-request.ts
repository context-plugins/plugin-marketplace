import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceRequestSchema, type WorkspaceRequest } from "./workspace-request.js";

export type WorkspacesRequest = {
  data?: WorkspaceRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesRequestSchema: Schema<WorkspacesRequest> = s.object<WorkspacesRequest>(
  {
    data: s.optional(s.lazy(() => workspaceRequestSchema)),
  },
  { additionalProperties: s.json() },
);
