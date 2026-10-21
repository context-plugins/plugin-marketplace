import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { decisionSchema, type Decision } from "./decision.js";

/** Approve or reject the invocation identified by a pending interaction ID. */
export type PlatformAgentRunApprovalDecision = {
  /** The interaction_id returned in the run's pending_interactions. */
  interactionId: string;
  /** The decision for this invocation only. Rejection follows normal workflow behavior. */
  decision: Decision;
};

export const platformAgentRunApprovalDecisionSchema: Schema<PlatformAgentRunApprovalDecision> =
  s.object<PlatformAgentRunApprovalDecision>({
    interactionId: s.string(),
    decision: decisionSchema,
    _keysMap: {
      interactionId: "interaction_id",
    },
  });
