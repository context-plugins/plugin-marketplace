import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Pending approval for a specific persisted tool invocation and its arguments. */
export type PlatformAgentRunToolApproval = {
  /** Identifies this specific invocation approval, not the tool definition. */
  interactionId: string;
  /** Interaction type identifying a tool execution approval request. @default "TOOL_APPROVAL" */
  type?: "TOOL_APPROVAL";
  /**
   * Platform tool identifier when recorded. Omitted for requests without one, such as some MCP
   * tools.
   */
  toolId?: string;
  /** Display name of the tool requesting approval. */
  displayName: string;
  /** Description of the tool associated with this approval request. */
  description: string;
  /**
   * Arguments from the persisted approval request. Older platform tools use flattened parameters.
   */
  arguments: Record<string, unknown>;
  /** Approval deadline, when one is set. Omitted when the approval has no expiration. */
  expiresAt?: Date;
};

export const platformAgentRunToolApprovalSchema: Schema<PlatformAgentRunToolApproval> =
  s.object<PlatformAgentRunToolApproval>({
    interactionId: s.string(),
    type: s.defaulted(s.literal("TOOL_APPROVAL"), "TOOL_APPROVAL"),
    toolId: s.optional(s.string()),
    displayName: s.string(),
    description: s.string(),
    arguments: s.record(s.string(), s.unknown()),
    expiresAt: s.optional(s.dateTime()),
    _keysMap: {
      interactionId: "interaction_id",
      toolId: "tool_id",
      displayName: "display_name",
      expiresAt: "expires_at",
    },
  });
