import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentTurnResultSchema, type AgentTurnResult } from "./agent-turn-result.js";
import { userTurnResultSchema, type UserTurnResult } from "./user-turn-result.js";

export type TestSetTurnResult = {
  agent?: AgentTurnResult;
  user?: UserTurnResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetTurnResultSchema: Schema<TestSetTurnResult> = s.object<TestSetTurnResult>(
  {
    agent: s.optional(s.lazy(() => agentTurnResultSchema)),
    user: s.optional(s.lazy(() => userTurnResultSchema)),
  },
  { additionalProperties: s.json() },
);
