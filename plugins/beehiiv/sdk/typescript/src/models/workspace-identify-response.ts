import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceIdentitySchema, type WorkspaceIdentity } from "./workspace-identity.js";

export type WorkspaceIdentifyResponse = {
  data: WorkspaceIdentity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceIdentifyResponseSchema: Schema<WorkspaceIdentifyResponse> =
  s.object<WorkspaceIdentifyResponse>(
    {
      data: workspaceIdentitySchema,
    },
    { additionalProperties: s.json() },
  );
