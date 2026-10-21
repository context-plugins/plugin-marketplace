import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentProfileSchema, type AgentProfile } from "./agent-profile.js";

export type V1OracleAgentsResponse = {
  data: AgentProfile;
};

export const v1OracleAgentsResponseSchema: Schema<V1OracleAgentsResponse> = s.object<V1OracleAgentsResponse>({
  data: agentProfileSchema,
});
