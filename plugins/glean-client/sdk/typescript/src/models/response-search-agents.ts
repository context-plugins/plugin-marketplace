import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentSchema, type Agent } from "./agent.js";

export type ResponseSearchAgents = {
  agents?: Agent[];
};

export const responseSearchAgentsSchema: Schema<ResponseSearchAgents> = s.object<ResponseSearchAgents>({
  agents: s.optional(s.array(s.lazy(() => agentSchema))),
});
