import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectResponse = {
  /** ID of a created project. */
  projectId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectResponseSchema: Schema<ProjectResponse> = s.object<ProjectResponse>(
  {
    projectId: s.string(),
    _keysMap: {
      projectId: "project_id",
    },
  },
  { additionalProperties: s.json() },
);
