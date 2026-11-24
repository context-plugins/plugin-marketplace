import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentSchema, type Agent } from "./agent.js";

export type ApiV1AgentsResponse = {
  agents: Agent[];
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AgentsResponseSchema: Schema<ApiV1AgentsResponse> = s.object<ApiV1AgentsResponse>(
  {
    agents: s.array(s.lazy(() => agentSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
