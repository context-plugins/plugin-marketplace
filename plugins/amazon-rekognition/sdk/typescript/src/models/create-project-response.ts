import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateProjectResponse = {
  /**
   * The Amazon Resource Name (ARN) of the new project. You can use the ARN to configure IAM access
   * to the project.
   */
  projectArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectResponseSchema: Schema<CreateProjectResponse> = s.object<CreateProjectResponse>(
  {
    projectArn: s.optional(s.string()),
    _keysMap: {
      projectArn: "ProjectArn",
    },
  },
  { additionalProperties: s.json() },
);
