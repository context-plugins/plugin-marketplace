import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

export type UpdateProjectOutput = {
  project?: Project;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateProjectOutputSchema: Schema<UpdateProjectOutput> = s.object<UpdateProjectOutput>(
  {
    project: s.optional(s.lazy(() => projectSchema)),
  },
  { additionalProperties: s.json() },
);
