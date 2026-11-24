import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Decision Engine Flow (Public API) */
export type DecisionEngineFlow = {
  id: string;
  name: string;
  workspaceId: number;
  decisionEngineId: string;
  audienceId: number;
  status: string;
  config?: Record<string, unknown>;
  createdAt?: Date;
  updatedAt?: Date;
};

export const decisionEngineFlowSchema: Schema<DecisionEngineFlow> = s.object<DecisionEngineFlow>({
  id: s.string(),
  name: s.string(),
  workspaceId: s.float64(),
  decisionEngineId: s.string(),
  audienceId: s.float64(),
  status: s.string(),
  config: s.optional(s.record(s.string(), s.unknown())),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
});
