import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectRequestSchema, type ProjectRequest } from "./project-request.js";

export type WorkspacesProjectsRequest = {
  data?: ProjectRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesProjectsRequestSchema: Schema<WorkspacesProjectsRequest> =
  s.object<WorkspacesProjectsRequest>(
    {
      data: s.optional(s.lazy(() => projectRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
