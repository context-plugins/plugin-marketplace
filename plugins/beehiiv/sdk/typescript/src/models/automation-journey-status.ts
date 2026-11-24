import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomationJourneyStatus = {
  InProgress: "in_progress",
  Completed: "completed",
  ExitedEarly: "exited_early",
  ManuallyRemoved: "manually_removed",
} as const;
export type AutomationJourneyStatus =
  | (typeof AutomationJourneyStatus)[keyof typeof AutomationJourneyStatus]
  | (string & {});

export const automationJourneyStatusSchema: EnumSchema<AutomationJourneyStatus> =
  s.enumOf<AutomationJourneyStatus>(AutomationJourneyStatus);
