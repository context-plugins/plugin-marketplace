import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentsConversationsAttachments400Error = {
  error: string;
};

export const agentsConversationsAttachments400ErrorSchema: Schema<AgentsConversationsAttachments400Error> =
  s.object<AgentsConversationsAttachments400Error>({
    error: s.string(),
  });
