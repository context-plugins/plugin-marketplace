import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** One skill finished inspecting; names the skill in progress. */
export type PlatformSkillSourcePreviewStreamProgress = {
  /** Event type, also sent as the SSE `event` name. @default "PROGRESS" */
  type?: "PROGRESS";
  /** Number of skills inspected so far. */
  completed: number;
  /** Number of skills to inspect. */
  total: number;
  /** Path of the skill being inspected. */
  currentSkill: string;
};

export const platformSkillSourcePreviewStreamProgressSchema: Schema<PlatformSkillSourcePreviewStreamProgress> =
  s.object<PlatformSkillSourcePreviewStreamProgress>({
    type: s.defaulted(s.literal("PROGRESS"), "PROGRESS"),
    completed: s.int(),
    total: s.int(),
    currentSkill: s.string(),
    _keysMap: {
      currentSkill: "current_skill",
    },
  });
