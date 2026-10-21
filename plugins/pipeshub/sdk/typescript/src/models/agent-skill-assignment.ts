import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reference to an existing skill assigned to an agent. */
export type AgentSkillAssignment = {
  /** Lowercase skill name using single hyphens between segments. */
  name: string;
};

export const agentSkillAssignmentSchema: Schema<AgentSkillAssignment> = s.object<AgentSkillAssignment>({
  name: s.string(),
});
