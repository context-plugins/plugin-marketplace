import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Trigger type for each leg of the order */
export const TriggerType = {
  Above: "ABOVE",
  Below: "BELOW",
  Immediate: "IMMEDIATE",
} as const;
export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType] | (string & {});

export const triggerTypeSchema: EnumSchema<TriggerType> = s.enumOf<TriggerType>(TriggerType);
