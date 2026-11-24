import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutResourcePolicyRequest = {
  /** The Amazon Resource Name (ARN) of the custom model to attach the policy to. */
  resourceArn: string;
  /**
   * The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8
   * encoded string without line breaks. To provide valid JSON for your policy, enclose the
   * attribute names and values in double quotes. If the JSON body is also enclosed in double
   * quotes, then you must escape the double quotes that are inside the policy: "{\"attribute\":
   * \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use single quotes to
   * enclose the policy and double quotes to enclose the JSON names and values: '{"attribute":
   * "value", "attribute": ["value"]}'
   */
  resourcePolicy: string;
  /**
   * The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are
   * creating a new policy that has no prior version, don't use this parameter. Amazon Comprehend
   * creates the revision ID for you.
   */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putResourcePolicyRequestSchema: Schema<PutResourcePolicyRequest> =
  s.object<PutResourcePolicyRequest>(
    {
      resourceArn: s.string(),
      resourcePolicy: s.string(),
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        resourceArn: "ResourceArn",
        resourcePolicy: "ResourcePolicy",
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
