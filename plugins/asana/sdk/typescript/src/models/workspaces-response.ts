import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type WorkspacesResponse = {
  data?: WorkspaceCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesResponseSchema: Schema<WorkspacesResponse> = s.object<WorkspacesResponse>(
  {
    data: s.optional(s.array(s.lazy(() => workspaceCompactSchema))),
  },
  { additionalProperties: s.json() },
);
