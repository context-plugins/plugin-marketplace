import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutProjectPolicyResponse = {
  /** The ID of the project policy. */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putProjectPolicyResponseSchema: Schema<PutProjectPolicyResponse> =
  s.object<PutProjectPolicyResponse>(
    {
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
