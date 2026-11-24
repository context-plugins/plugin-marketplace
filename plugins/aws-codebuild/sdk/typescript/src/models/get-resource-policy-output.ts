import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetResourcePolicyOutput = {
  /** The resource policy for the resource identified by the input ARN parameter. */
  policy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getResourcePolicyOutputSchema: Schema<GetResourcePolicyOutput> =
  s.object<GetResourcePolicyOutput>(
    {
      policy: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
