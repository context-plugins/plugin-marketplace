import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";

export type AgentConversationDetailAccess = {
  isOwner?: boolean;
  accessLevel?: AccessLevel;
};

export const agentConversationDetailAccessSchema: Schema<AgentConversationDetailAccess> =
  s.object<AgentConversationDetailAccess>({
    isOwner: s.optional(s.boolean()),
    accessLevel: s.optional(s.lazy(() => accessLevelSchema)),
  });
