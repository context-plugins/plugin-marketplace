import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of the trigger condition. custom applies a kusto expression over the results, and results
 * count applies a comparison over results count
 */
export const TriggerType = {
  Custom: "custom",
  ResultsCount: "resultsCount",
} as const;
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType] | (string & {});

export const triggerTypeSchema: EnumSchema<TriggerType> = s.enumOf<TriggerType>(TriggerType);
