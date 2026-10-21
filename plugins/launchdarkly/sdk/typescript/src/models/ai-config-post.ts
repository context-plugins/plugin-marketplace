import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigVariationPostSchema, type AiConfigVariationPost } from "./ai-config-variation-post.js";
import { Mode, modeSchema } from "./mode.js";

export type AiConfigPost = {
  description?: string;
  key: string;
  maintainerId?: string;
  maintainerTeamKey?: string;
  /** @default Mode.Completion */
  mode?: Mode;
  name: string;
  tags?: string[];
  defaultVariation?: AiConfigVariationPost;
  /** Evaluation metric key for this AI Config */
  evaluationMetricKey?: string;
  /** Whether the evaluation metric is inverted, meaning a lower value is better if set as true */
  isInverted?: boolean;
};

export const aiConfigPostSchema: Schema<AiConfigPost> = s.object<AiConfigPost>({
  description: s.optional(s.string()),
  key: s.string(),
  maintainerId: s.optional(s.string()),
  maintainerTeamKey: s.optional(s.string()),
  mode: s.defaulted(modeSchema, Mode.Completion),
  name: s.string(),
  tags: s.optional(s.array(s.string())),
  defaultVariation: s.optional(s.lazy(() => aiConfigVariationPostSchema)),
  evaluationMetricKey: s.optional(s.string()),
  isInverted: s.optional(s.boolean()),
});
