import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectInternalSchema, projectSchema, type Project } from "./project.js";

export type ProjectsResponse = {
  projects?: Project[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectsResponseProperties: s.Shape<ProjectsResponse> = {
  projects: s.optional(s.array(s.lazy(() => projectInternalSchema))),
};

export const projectsResponseInternalSchema: Schema<ProjectsResponse> = s.object<ProjectsResponse>(
  projectsResponseProperties,
  { additionalProperties: s.json() },
);

export const projectsResponseSchema: Schema<ProjectsResponse> = s.lazySchema(() =>
  s.object<ProjectsResponse>(
    {
      ...projectsResponseProperties,
      projects: s.optional(s.array(s.lazy(() => projectSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
