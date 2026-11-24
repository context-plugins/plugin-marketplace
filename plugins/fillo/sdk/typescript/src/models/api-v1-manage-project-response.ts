import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

export type ApiV1ManageProjectResponse = {
  project: Project;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectResponseSchema: Schema<ApiV1ManageProjectResponse> =
  s.object<ApiV1ManageProjectResponse>(
    {
      project: projectSchema,
    },
    { additionalProperties: s.json() },
  );
