import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspaceResponseInternalSchema,
  workspaceResponseSchema,
  type WorkspaceResponse,
} from "./workspace-response.js";

export type WorkspacesResponse1 = {
  data?: WorkspaceResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const workspacesResponse1Properties: s.Shape<WorkspacesResponse1> = {
  data: s.optional(s.lazy(() => workspaceResponseInternalSchema)),
};

export const workspacesResponse1InternalSchema: Schema<WorkspacesResponse1> = s.object<WorkspacesResponse1>(
  workspacesResponse1Properties,
  { additionalProperties: s.json() },
);

export const workspacesResponse1Schema: Schema<WorkspacesResponse1> = s.lazySchema(() =>
  s.object<WorkspacesResponse1>(
    {
      ...workspacesResponse1Properties,
      data: s.optional(s.lazy(() => workspaceResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
