import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectVisibilitySchema, type ProjectVisibility } from "./project-visibility.js";

export type UpdateProjectVisibilityInput = {
  /** The Amazon Resource Name (ARN) of the build project. */
  projectArn: string;
  projectVisibility: ProjectVisibility;
  /**
   * The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3
   * artifacts for the project's builds.
   */
  resourceAccessRole?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateProjectVisibilityInputSchema: Schema<UpdateProjectVisibilityInput> =
  s.object<UpdateProjectVisibilityInput>(
    {
      projectArn: s.string(),
      projectVisibility: projectVisibilitySchema,
      resourceAccessRole: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
