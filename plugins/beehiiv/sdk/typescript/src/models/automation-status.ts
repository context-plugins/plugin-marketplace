import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomationStatus = {
  Running: "running",
  Finishing: "finishing",
  Inactive: "inactive",
  Live: "live",
  Draft: "draft",
} as const;
export type AutomationStatus = (typeof AutomationStatus)[keyof typeof AutomationStatus] | (string & {});

export const automationStatusSchema: EnumSchema<AutomationStatus> =
  s.enumOf<AutomationStatus>(AutomationStatus);
