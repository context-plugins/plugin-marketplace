import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceSchema, type Workspace } from "./workspace.js";

export type ApiV1ManageWorkspaceResponse = {
  workspace: Workspace;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageWorkspaceResponseSchema: Schema<ApiV1ManageWorkspaceResponse> =
  s.object<ApiV1ManageWorkspaceResponse>(
    {
      workspace: workspaceSchema,
    },
    { additionalProperties: s.json() },
  );
