import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Describes features that the agent supports. example: { "ap.io.messages": true, "ap.io.streaming":
 * true }
 */
export type AgentCapabilities = {
  /**
   * Whether the agent supports messages as an input. If true, you'll pass `messages` as an input
   * when running the agent.
   */
  apIoMessages?: boolean;
  /**
   * Whether the agent supports streaming output. If true, you you can stream agent ouput. All
   * agents currently support streaming.
   */
  apIoStreaming?: boolean;
};

export const agentCapabilitiesSchema: Schema<AgentCapabilities> = s.object<AgentCapabilities>({
  apIoMessages: s.optional(s.boolean()),
  apIoStreaming: s.optional(s.boolean()),
  _keysMap: {
    apIoMessages: "ap.io.messages",
    apIoStreaming: "ap.io.streaming",
  },
});
