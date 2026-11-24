import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutResourcePolicyOutput = {
  /** The ARN of the Project or ReportGroup resource that is associated with a resource policy. */
  resourceArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putResourcePolicyOutputSchema: Schema<PutResourcePolicyOutput> =
  s.object<PutResourcePolicyOutput>(
    {
      resourceArn: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
