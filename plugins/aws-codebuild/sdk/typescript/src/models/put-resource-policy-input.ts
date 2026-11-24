import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutResourcePolicyInput = {
  /**
   * A JSON-formatted resource policy. For more information, see Sharing a Project and Sharing a
   * Report Group in the CodeBuild User Guide.
   */
  policy: string;
  /**
   * The ARN of the Project or ReportGroup resource you want to associate with a resource policy.
   */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putResourcePolicyInputSchema: Schema<PutResourcePolicyInput> = s.object<PutResourcePolicyInput>(
  {
    policy: s.string(),
    resourceArn: s.string(),
  },
  { additionalProperties: s.json() },
);
