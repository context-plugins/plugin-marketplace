import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  automaticTapeCreationPolicyInfoSchema,
  type AutomaticTapeCreationPolicyInfo,
} from "./automatic-tape-creation-policy-info.js";

export type ListAutomaticTapeCreationPoliciesOutput = {
  /**
   * Gets a listing of information about the gateway's automatic tape creation policies, including
   * the automatic tape creation rules and the gateway that is using the policies.
   */
  automaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAutomaticTapeCreationPoliciesOutputSchema: Schema<ListAutomaticTapeCreationPoliciesOutput> =
  s.object<ListAutomaticTapeCreationPoliciesOutput>(
    {
      automaticTapeCreationPolicyInfos: s.optional(
        s.array(s.lazy(() => automaticTapeCreationPolicyInfoSchema)),
      ),
      _keysMap: {
        automaticTapeCreationPolicyInfos: "AutomaticTapeCreationPolicyInfos",
      },
    },
    { additionalProperties: s.json() },
  );
