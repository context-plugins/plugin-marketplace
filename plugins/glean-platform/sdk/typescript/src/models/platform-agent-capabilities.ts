import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformAgentCapabilities = {
  /** Whether the agent supports messages as input. */
  apIoMessages?: boolean;
  /** Whether the agent supports streaming output. */
  apIoStreaming?: boolean;
};

export const platformAgentCapabilitiesSchema: Schema<PlatformAgentCapabilities> =
  s.object<PlatformAgentCapabilities>({
    apIoMessages: s.optional(s.boolean()),
    apIoStreaming: s.optional(s.boolean()),
    _keysMap: {
      apIoMessages: "ap.io.messages",
      apIoStreaming: "ap.io.streaming",
    },
  });
