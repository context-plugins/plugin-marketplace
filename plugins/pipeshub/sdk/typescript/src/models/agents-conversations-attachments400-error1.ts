import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentsConversationsAttachments400Error1 = {
  error: string;
};

export const agentsConversationsAttachments400Error1Schema: Schema<AgentsConversationsAttachments400Error1> =
  s.object<AgentsConversationsAttachments400Error1>({
    error: s.string(),
  });
