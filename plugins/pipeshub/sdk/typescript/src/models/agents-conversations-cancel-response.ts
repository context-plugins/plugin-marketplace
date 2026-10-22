import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentsConversationsCancelResponse = {
  cancelled?: boolean;
};

export const agentsConversationsCancelResponseSchema: Schema<AgentsConversationsCancelResponse> =
  s.object<AgentsConversationsCancelResponse>({
    cancelled: s.optional(s.boolean()),
  });
