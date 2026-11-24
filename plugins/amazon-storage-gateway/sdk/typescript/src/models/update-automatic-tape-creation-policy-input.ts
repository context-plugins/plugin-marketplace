import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  automaticTapeCreationRuleSchema,
  type AutomaticTapeCreationRule,
} from "./automatic-tape-creation-rule.js";

export type UpdateAutomaticTapeCreationPolicyInput = {
  /**
   * An automatic tape creation policy consists of a list of automatic tape creation rules. The
   * rules determine when and how to automatically create new tapes.
   */
  automaticTapeCreationRules: AutomaticTapeCreationRule[];
  gatewayArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAutomaticTapeCreationPolicyInputSchema: Schema<UpdateAutomaticTapeCreationPolicyInput> =
  s.object<UpdateAutomaticTapeCreationPolicyInput>(
    {
      automaticTapeCreationRules: s.array(s.lazy(() => automaticTapeCreationRuleSchema)),
      gatewayArn: s.string(),
      _keysMap: {
        automaticTapeCreationRules: "AutomaticTapeCreationRules",
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
