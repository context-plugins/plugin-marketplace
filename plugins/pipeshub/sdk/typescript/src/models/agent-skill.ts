import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A skill linked to the agent, as returned by the agent detail graph projection. Flat by design — a
 * skill carries no sub-entities analogous to a toolset's tools. Fields other than `name` are read
 * straight off the skill document and are null when unset.
 */
export type AgentSkill = {
  /** Unique skill name, used to reference the skill on agent create/update. */
  name: string;
  description?: string | null;
  category?: string | null;
  subcategory?: string | null;
  version?: string | null;
  /**
   * Lifecycle state of the skill — `active`, `deprecated`, or `disabled`. `candidate` is a
   * learning-loop record state, not an assignable skill, and is not returned here.
   */
  status?: string | null;
};

export const agentSkillSchema: Schema<AgentSkill> = s.object<AgentSkill>({
  name: s.string(),
  description: s.optionalNullable(s.string()),
  category: s.optionalNullable(s.string()),
  subcategory: s.optionalNullable(s.string()),
  version: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
});
