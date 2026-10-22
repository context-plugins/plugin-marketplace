import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigTargetingDefaults = {
  onVariation: number;
  offVariation: number;
};

export const aiConfigTargetingDefaultsSchema: Schema<AiConfigTargetingDefaults> =
  s.object<AiConfigTargetingDefaults>({
    onVariation: s.int(),
    offVariation: s.int(),
  });
