import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

/** A list of automation projects. */
export type ProjectList = {
  /** Array of project objects. */
  data?: Project[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectListSchema: Schema<ProjectList> = s.object<ProjectList>(
  {
    data: s.optional(s.array(s.lazy(() => projectSchema))),
  },
  { additionalProperties: s.json() },
);
