import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskCredentials = {
  /**
   * The ARN of an IAM role that Step Functions assumes for the task. The role can allow
   * cross-account access to resources.
   */
  roleArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskCredentialsSchema: Schema<TaskCredentials> = s.object<TaskCredentials>(
  {
    roleArn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
