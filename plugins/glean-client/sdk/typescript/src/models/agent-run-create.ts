import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageSchema, type Message } from "./message.js";

/**
 * Payload for creating a run. **Important**: If the agent uses an input form trigger, the `input`
 * field is required and must include all fields defined in the form schema. Even fields marked as
 * optional in the UI must be included in the request—use an empty string (`""`) for optional fields
 * without values. Omitting required form fields will result in a 500 error.
 */
export type AgentRunCreate = {
  /** The ID of the agent to run. */
  agentId: string;
  /** The input to the agent. Required when the agent uses an input form trigger. */
  input?: Record<string, unknown>;
  /** The messages to pass an input to the agent. */
  messages?: Message[];
  /** The metadata to pass to the agent. */
  metadata?: Record<string, unknown>;
};

export const agentRunCreateSchema: Schema<AgentRunCreate> = s.object<AgentRunCreate>({
  agentId: s.string(),
  input: s.optional(s.record(s.string(), s.unknown())),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    agentId: "agent_id",
  },
});
