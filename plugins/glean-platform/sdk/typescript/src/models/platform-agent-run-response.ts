import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformDurableAgentRun1Schema,
  type PlatformDurableAgentRun1,
} from "./platform-durable-agent-run1.js";

/** Persisted agent run snapshot with a request ID for support correlation. */
export type PlatformAgentRunResponse = {
  /** Current persisted snapshot of the requested agent run. */
  run: PlatformDurableAgentRun1;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformAgentRunResponseSchema: Schema<PlatformAgentRunResponse> =
  s.object<PlatformAgentRunResponse>({
    run: platformDurableAgentRun1Schema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
