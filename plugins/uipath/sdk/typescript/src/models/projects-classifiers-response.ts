import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classifierSchema, type Classifier } from "./classifier.js";

export type ProjectsClassifiersResponse = {
  classifiers?: Classifier[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsClassifiersResponseSchema: Schema<ProjectsClassifiersResponse> =
  s.object<ProjectsClassifiersResponse>(
    {
      classifiers: s.optional(s.array(s.lazy(() => classifierSchema))),
    },
    { additionalProperties: s.json() },
  );
