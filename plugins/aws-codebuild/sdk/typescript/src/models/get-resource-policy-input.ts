import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetResourcePolicyInput = {
  /** The ARN of the resource that is associated with the resource policy. */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getResourcePolicyInputSchema: Schema<GetResourcePolicyInput> = s.object<GetResourcePolicyInput>(
  {
    resourceArn: s.string(),
  },
  { additionalProperties: s.json() },
);
