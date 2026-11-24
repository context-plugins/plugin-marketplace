import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  automaticTapeCreationRuleSchema,
  type AutomaticTapeCreationRule,
} from "./automatic-tape-creation-rule.js";

export type AutomaticTapeCreationPolicyInfo = {
  /**
   * An automatic tape creation policy consists of a list of automatic tape creation rules. This
   * returns the rules that determine when and how to automatically create new tapes.
   */
  automaticTapeCreationRules?: AutomaticTapeCreationRule[];
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automaticTapeCreationPolicyInfoSchema: Schema<AutomaticTapeCreationPolicyInfo> =
  s.object<AutomaticTapeCreationPolicyInfo>(
    {
      automaticTapeCreationRules: s.optional(s.array(s.lazy(() => automaticTapeCreationRuleSchema))),
      gatewayArn: s.optional(s.string()),
      _keysMap: {
        automaticTapeCreationRules: "AutomaticTapeCreationRules",
        gatewayArn: "GatewayARN",
      },
    },
    { additionalProperties: s.json() },
  );
