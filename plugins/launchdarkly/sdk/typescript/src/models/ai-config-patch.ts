import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigPatch = {
  description?: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  name?: string;
  tags?: string[];
  /** Evaluation metric key for this AI Config */
  evaluationMetricKey?: string;
  /** Whether the evaluation metric is inverted, meaning a lower value is better if set as true */
  isInverted?: boolean;
};

export const aiConfigPatchSchema: Schema<AiConfigPatch> = s.object<AiConfigPatch>({
  description: s.optional(s.string()),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  name: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  evaluationMetricKey: s.optional(s.string()),
  isInverted: s.optional(s.boolean()),
});
