import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConversationsCancelRequest = {
  /** The `runId` sent when the stream was started. */
  runId: string;
};

export const conversationsCancelRequestSchema: Schema<ConversationsCancelRequest> =
  s.object<ConversationsCancelRequest>({
    runId: s.string(),
  });
