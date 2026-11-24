import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentGrantSchema, type AgentGrant } from "./agent-grant.js";

export type ApiV1ManageAgentsResponse = {
  grants: AgentGrant[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageAgentsResponseSchema: Schema<ApiV1ManageAgentsResponse> =
  s.object<ApiV1ManageAgentsResponse>(
    {
      grants: s.array(s.lazy(() => agentGrantSchema)),
    },
    { additionalProperties: s.json() },
  );
