import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentsConversationsCancelRequest = {
  /** The `runId` sent when the stream was started. */
  runId: string;
};

export const agentsConversationsCancelRequestSchema: Schema<AgentsConversationsCancelRequest> =
  s.object<AgentsConversationsCancelRequest>({
    runId: s.string(),
  });
