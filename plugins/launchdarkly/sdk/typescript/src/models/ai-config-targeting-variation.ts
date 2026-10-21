import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigTargetingVariationValueSchema,
  type AiConfigTargetingVariationValue,
} from "./unions/ai-config-targeting-variation-value.js";

export type AiConfigTargetingVariation = {
  id: string;
  description: string;
  name: string;
  value: AiConfigTargetingVariationValue;
};

export const aiConfigTargetingVariationSchema: Schema<AiConfigTargetingVariation> =
  s.object<AiConfigTargetingVariation>({
    id: s.string(),
    description: s.string(),
    name: s.string(),
    value: aiConfigTargetingVariationValueSchema,
    _keysMap: {
      id: "_id",
    },
  });
