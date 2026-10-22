import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContextInstanceEvaluationReason = {
  /** Describes the general reason that LaunchDarkly selected this variation. */
  kind: string;
  /**
   * The positional index of the matching rule if the kind is 'RULE_MATCH'. The index is 0-based.
   */
  ruleIndex?: number;
  /** The unique identifier of the matching rule if the kind is 'RULE_MATCH'. */
  ruleId?: string;
  /** The key of the flag that failed if the kind is 'PREREQUISITE_FAILED'. */
  prerequisiteKey?: string;
  /** Indicates whether the context was evaluated as part of an experiment. */
  inExperiment?: boolean;
  /** The specific error type if the kind is 'ERROR'. */
  errorKind?: string;
};

export const contextInstanceEvaluationReasonSchema: Schema<ContextInstanceEvaluationReason> =
  s.object<ContextInstanceEvaluationReason>({
    kind: s.string(),
    ruleIndex: s.optional(s.int()),
    ruleId: s.optional(s.string()),
    prerequisiteKey: s.optional(s.string()),
    inExperiment: s.optional(s.boolean()),
    errorKind: s.optional(s.string()),
    _keysMap: {
      ruleId: "ruleID",
    },
  });
