import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { storedAgentConversationSchema, type StoredAgentConversation } from "../stored-agent-conversation.js";

export type Conversation11 = StoredAgentConversation | Record<string, unknown> | null;

export const conversation11Schema: Schema<Conversation11> = s.of<Conversation11>(
  s.nullable(s.union([s.lazy(() => storedAgentConversationSchema), s.record(s.string(), s.unknown())])),
);
