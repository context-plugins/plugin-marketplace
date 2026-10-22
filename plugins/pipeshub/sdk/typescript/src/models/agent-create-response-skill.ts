import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A skill linked to the agent at creation time. Creating or updating an agent only links edges to
 * skills that already exist and never writes a skill document, so only the name is echoed back
 * here.
 */
export type AgentCreateResponseSkill = {
  name: string;
};

export const agentCreateResponseSkillSchema: Schema<AgentCreateResponseSkill> =
  s.object<AgentCreateResponseSkill>({
    name: s.string(),
  });
