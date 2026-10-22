import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageSchema, type Message } from "./message.js";
import { projectVisibility1Schema, type ProjectVisibility1 } from "./project-visibility1.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { status2Schema, type Status2 } from "./status2.js";

/**
 * A conversation with a specific AI agent. Similar to regular conversations but tied to an agent's
 * configuration and capabilities.
 */
export type AgentConversation = {
  id?: string;
  /** The agent this conversation is with */
  agentKey?: string;
  userId?: string;
  orgId?: string;
  title?: string;
  messages?: Message[];
  /** Same values as `Conversation.status`. */
  status?: Status2;
  isShared?: boolean;
  sharedWith?: SharedWith[];
  lastActivityAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
  /** The project this agent conversation is linked to, if any. */
  projectId?: string | null;
  /**
   * Only meaningful when `projectId` is set. `project` exposes the conversation to every member of
   * the linked project.
   */
  projectVisibility?: ProjectVisibility1 | null;
};

export const agentConversationSchema: Schema<AgentConversation> = s.object<AgentConversation>({
  id: s.optional(s.string()),
  agentKey: s.optional(s.string()),
  userId: s.optional(s.string()),
  orgId: s.optional(s.string()),
  title: s.optional(s.string()),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  status: s.optional(s.lazy(() => status2Schema)),
  isShared: s.optional(s.boolean()),
  sharedWith: s.optional(s.array(s.lazy(() => sharedWithSchema))),
  lastActivityAt: s.optional(s.int()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  projectId: s.optionalNullable(s.string()),
  projectVisibility: s.optionalNullable(s.lazy(() => projectVisibility1Schema)),
  _keysMap: {
    id: "_id",
  },
});
