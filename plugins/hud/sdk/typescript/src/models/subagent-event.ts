import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { result1Schema, type Result1 } from "./unions/result1.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/** A nested-agent invocation (one ``AgentTool.__call__``). */
export type SubagentEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "subagent" */
  kind?: "subagent";
  agentName: string;
  arguments?: Record<string, unknown>;
  result?: Result1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subagentEventSchema: Schema<SubagentEvent> = s.object<SubagentEvent>(
  {
    id: s.string(),
    parentId: s.optional(s.lazy(() => parentIdSchema)),
    startedAt: s.optional(s.lazy(() => startedAtSchema)),
    endedAt: s.optional(s.lazy(() => endedAtSchema)),
    seq: s.defaulted(s.int(), 0),
    kind: s.defaulted(s.literal("subagent"), "subagent"),
    agentName: s.string(),
    arguments: s.optional(s.record(s.string(), s.unknown())),
    result: s.optional(s.lazy(() => result1Schema)),
    _keysMap: {
      parentId: "parent_id",
      startedAt: "started_at",
      endedAt: "ended_at",
      agentName: "agent_name",
    },
  },
  { additionalProperties: s.json() },
);
