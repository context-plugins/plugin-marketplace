import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HumanLoopActivationOutput = {
  /** The Amazon Resource Name (ARN) of the HumanLoop created. */
  humanLoopArn?: string;
  /** Shows if and why human review was needed. */
  humanLoopActivationReasons?: string[];
  /**
   * Shows the result of condition evaluations, including those conditions which activated a human
   * review.
   */
  humanLoopActivationConditionsEvaluationResults?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const humanLoopActivationOutputSchema: Schema<HumanLoopActivationOutput> =
  s.object<HumanLoopActivationOutput>(
    {
      humanLoopArn: s.optional(s.string()),
      humanLoopActivationReasons: s.optional(s.array(s.string())),
      humanLoopActivationConditionsEvaluationResults: s.optional(s.string()),
      _keysMap: {
        humanLoopArn: "HumanLoopArn",
        humanLoopActivationReasons: "HumanLoopActivationReasons",
        humanLoopActivationConditionsEvaluationResults: "HumanLoopActivationConditionsEvaluationResults",
      },
    },
    { additionalProperties: s.json() },
  );
