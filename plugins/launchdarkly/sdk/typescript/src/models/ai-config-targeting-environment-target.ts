import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigTargetingEnvironmentTarget = {
  contextKind: string;
  values: string[];
  variation: number;
};

export const aiConfigTargetingEnvironmentTargetSchema: Schema<AiConfigTargetingEnvironmentTarget> =
  s.object<AiConfigTargetingEnvironmentTarget>({
    contextKind: s.string(),
    values: s.array(s.string()),
    variation: s.int(),
  });
