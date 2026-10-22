import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AgentIdParams = {
  id: string;
};

export const agentIdParamsSchema: Schema<AgentIdParams> = s.object<AgentIdParams>({
  id: s.string(),
});
