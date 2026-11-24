import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The trigger mode supported by the action. */
export const TriggerMode = {
  TriggerModeUnspecified: "TRIGGER_MODE_UNSPECIFIED",
  ApiHubOnDemandTrigger: "API_HUB_ON_DEMAND_TRIGGER",
  ApiHubScheduleTrigger: "API_HUB_SCHEDULE_TRIGGER",
  NonApiHubManaged: "NON_API_HUB_MANAGED",
} as const;
export type TriggerMode = (typeof TriggerMode)[keyof typeof TriggerMode] | (string & {});

export const triggerModeSchema: EnumSchema<TriggerMode> = s.enumOf<TriggerMode>(TriggerMode);
