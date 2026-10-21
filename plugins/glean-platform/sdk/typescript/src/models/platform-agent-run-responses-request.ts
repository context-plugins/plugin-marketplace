import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformAgentRunApprovalDecisionSchema,
  type PlatformAgentRunApprovalDecision,
} from "./platform-agent-run-approval-decision.js";

/** Invocation-scoped decisions for the complete pending approval batch. */
export type PlatformAgentRunResponsesRequest = {
  /**
   * ID of the run whose pending approvals are being answered. Must belong to the agent identified
   * in the path.
   */
  runId: string;
  /** One decision per pending interaction. Interaction IDs must be unique. */
  responses: PlatformAgentRunApprovalDecision[];
};

export const platformAgentRunResponsesRequestSchema: Schema<PlatformAgentRunResponsesRequest> =
  s.object<PlatformAgentRunResponsesRequest>({
    runId: s.string(),
    responses: s.array(s.lazy(() => platformAgentRunApprovalDecisionSchema)),
    _keysMap: {
      runId: "run_id",
    },
  });
