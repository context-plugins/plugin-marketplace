import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformAgentRunSchema, type PlatformAgentRun } from "./platform-agent-run.js";
import { platformMessageSchema, type PlatformMessage } from "./platform-message.js";

export type PlatformAgentRunWaitResponse = {
  run?: PlatformAgentRun;
  /** Messages returned by the completed run. */
  messages?: PlatformMessage[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformAgentRunWaitResponseSchema: Schema<PlatformAgentRunWaitResponse> =
  s.object<PlatformAgentRunWaitResponse>({
    run: s.optional(s.lazy(() => platformAgentRunSchema)),
    messages: s.optional(s.array(s.lazy(() => platformMessageSchema))),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
