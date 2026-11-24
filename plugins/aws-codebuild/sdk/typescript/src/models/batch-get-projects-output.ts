import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

export type BatchGetProjectsOutput = {
  /** Information about the requested build projects. */
  projects?: Project[];
  /** The names of build projects for which information could not be found. */
  projectsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetProjectsOutputSchema: Schema<BatchGetProjectsOutput> = s.object<BatchGetProjectsOutput>(
  {
    projects: s.optional(s.array(s.lazy(() => projectSchema))),
    projectsNotFound: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
