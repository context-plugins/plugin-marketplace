import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectVisibilitySchema, type ProjectVisibility } from "./project-visibility.js";

export type UpdateProjectVisibilityOutput = {
  /** The Amazon Resource Name (ARN) of the build project. */
  projectArn?: string;
  /** Contains the project identifier used with the public build APIs. */
  publicProjectAlias?: string;
  projectVisibility?: ProjectVisibility;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateProjectVisibilityOutputSchema: Schema<UpdateProjectVisibilityOutput> =
  s.object<UpdateProjectVisibilityOutput>(
    {
      projectArn: s.optional(s.string()),
      publicProjectAlias: s.optional(s.string()),
      projectVisibility: s.optional(s.lazy(() => projectVisibilitySchema)),
    },
    { additionalProperties: s.json() },
  );
