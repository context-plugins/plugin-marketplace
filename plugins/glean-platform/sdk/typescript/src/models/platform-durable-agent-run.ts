import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAgentRunError1Schema, type PlatformAgentRunError1 } from "./platform-agent-run-error1.js";
import { platformAgentRunState1Schema, type PlatformAgentRunState1 } from "./platform-agent-run-state1.js";
import {
  platformAgentRunToolApprovalSchema,
  type PlatformAgentRunToolApproval,
} from "./platform-agent-run-tool-approval.js";

/**
 * Agent run state, pending tool approvals, and output available independently of the creation
 * request.
 */
export type PlatformDurableAgentRun = {
  /** ID of the run, preserved across approval continuations. */
  runId: string;
  /** ID of the agent that owns the run. */
  agentId: string;
  /** Current lifecycle state of the run. */
  state: PlatformAgentRunState1;
  /** Timestamp when the run was first persisted. */
  createdAt: Date;
  /**
   * Latest persisted activity timestamp across the execution and its messages, including checkpoint
   * messages. This is not a worker heartbeat or an exact state-transition timestamp.
   */
  updatedAt: Date;
  /** Execution deadline, when one is set. Not the run history retention deadline. */
  expiresAt?: Date;
  /** Unanswered tool approvals when the run is in REQUIRES_INPUT. Empty in other states. */
  pendingInteractions: PlatformAgentRunToolApproval[];
  /** Accumulated text-only agent output under the messages key, when available. */
  output?: Record<string, unknown>;
  /** Caller-safe failure details when the run is in FAILED. */
  error?: PlatformAgentRunError1;
};

export const platformDurableAgentRunSchema: Schema<PlatformDurableAgentRun> =
  s.object<PlatformDurableAgentRun>({
    runId: s.string(),
    agentId: s.string(),
    state: platformAgentRunState1Schema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    expiresAt: s.optional(s.dateTime()),
    pendingInteractions: s.array(s.lazy(() => platformAgentRunToolApprovalSchema)),
    output: s.optional(s.record(s.string(), s.unknown())),
    error: s.optional(s.lazy(() => platformAgentRunError1Schema)),
    _keysMap: {
      runId: "run_id",
      agentId: "agent_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      expiresAt: "expires_at",
      pendingInteractions: "pending_interactions",
    },
  });
