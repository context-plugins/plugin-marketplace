import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectResponseSchema, type ProjectResponse } from "./project-response.js";

export type WorkspacesProjectsResponse1 = {
  data?: ProjectResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesProjectsResponse1Schema: Schema<WorkspacesProjectsResponse1> =
  s.object<WorkspacesProjectsResponse1>(
    {
      data: s.optional(s.lazy(() => projectResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
