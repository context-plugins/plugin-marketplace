import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetProjectsInput = {
  /**
   * The names or ARNs of the build projects. To get information about a project shared with your
   * Amazon Web Services account, its ARN must be specified. You cannot specify a shared project
   * using its name.
   */
  names: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetProjectsInputSchema: Schema<BatchGetProjectsInput> = s.object<BatchGetProjectsInput>(
  {
    names: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
