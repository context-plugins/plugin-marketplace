import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateProjectVersionResponse = {
  /**
   * The ARN of the model or the project version that was created. Use DescribeProjectVersion to get
   * the current status of the training operation.
   */
  projectVersionArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectVersionResponseSchema: Schema<CreateProjectVersionResponse> =
  s.object<CreateProjectVersionResponse>(
    {
      projectVersionArn: s.optional(s.string()),
      _keysMap: {
        projectVersionArn: "ProjectVersionArn",
      },
    },
    { additionalProperties: s.json() },
  );
