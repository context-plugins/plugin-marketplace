import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { project2Schema, type Project2 } from "./project2.js";

/** A list of Launch projects. */
export type ProjectList2 = {
  /** Array of Launch project objects. */
  data?: Project2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectList2Schema: Schema<ProjectList2> = s.object<ProjectList2>(
  {
    data: s.optional(s.array(s.lazy(() => project2Schema))),
  },
  { additionalProperties: s.json() },
);
