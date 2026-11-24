import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the test case is linked to an automated robot process */
export const AutomationStatus = {
  NotAutomated: "NotAutomated",
  Automated: "Automated",
} as const;
export type AutomationStatus = (typeof AutomationStatus)[keyof typeof AutomationStatus] | (string & {});

export const automationStatusSchema: EnumSchema<AutomationStatus> =
  s.enumOf<AutomationStatus>(AutomationStatus);
