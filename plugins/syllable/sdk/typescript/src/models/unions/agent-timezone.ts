import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timezone of the agent with which the session occurred */
export type AgentTimezone = string;

export const agentTimezoneSchema: Schema<AgentTimezone> = s.of<AgentTimezone>(s.union([s.string()]));
