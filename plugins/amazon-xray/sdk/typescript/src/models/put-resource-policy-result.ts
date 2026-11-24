import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourcePolicySchema, type ResourcePolicy } from "./resource-policy.js";

export type PutResourcePolicyResult = {
  resourcePolicy?: ResourcePolicy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putResourcePolicyResultSchema: Schema<PutResourcePolicyResult> =
  s.object<PutResourcePolicyResult>(
    {
      resourcePolicy: s.optional(s.lazy(() => resourcePolicySchema)),
      _keysMap: {
        resourcePolicy: "ResourcePolicy",
      },
    },
    { additionalProperties: s.json() },
  );
