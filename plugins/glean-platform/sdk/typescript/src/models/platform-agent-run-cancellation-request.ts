import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request cooperative cancellation of a run owned by the caller. */
export type PlatformAgentRunCancellationRequest = {
  /** ID of the run to cancel. Must belong to the agent identified in the path. */
  runId: string;
};

export const platformAgentRunCancellationRequestSchema: Schema<PlatformAgentRunCancellationRequest> =
  s.object<PlatformAgentRunCancellationRequest>({
    runId: s.string(),
    _keysMap: {
      runId: "run_id",
    },
  });
