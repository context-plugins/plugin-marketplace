import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A skill cited by Assistant. */
export type ChatSkill = {
  /** Artifact ID of the skill. */
  id: string;
  /** Name of the skill. */
  name?: string;
  /** URL for viewing the skill. */
  url?: string;
};

export const chatSkillSchema: Schema<ChatSkill> = s.object<ChatSkill>({
  id: s.string(),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
});
