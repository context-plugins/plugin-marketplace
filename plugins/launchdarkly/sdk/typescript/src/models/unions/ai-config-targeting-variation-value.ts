import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AiConfigTargetingVariationValue = boolean | Record<string, unknown> | number | string;

export const aiConfigTargetingVariationValueSchema: Schema<AiConfigTargetingVariationValue> =
  s.of<AiConfigTargetingVariationValue>(
    s.union([s.boolean(), s.record(s.string(), s.unknown()), s.float64(), s.string()]),
  );
