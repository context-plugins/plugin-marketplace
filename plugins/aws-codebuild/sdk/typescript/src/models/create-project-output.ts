import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

export type CreateProjectOutput = {
  project?: Project;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectOutputSchema: Schema<CreateProjectOutput> = s.object<CreateProjectOutput>(
  {
    project: s.optional(s.lazy(() => projectSchema)),
  },
  { additionalProperties: s.json() },
);
