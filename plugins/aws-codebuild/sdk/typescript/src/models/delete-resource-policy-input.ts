import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteResourcePolicyInput = {
  /** The ARN of the resource that is associated with the resource policy. */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteResourcePolicyInputSchema: Schema<DeleteResourcePolicyInput> =
  s.object<DeleteResourcePolicyInput>(
    {
      resourceArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
