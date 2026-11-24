import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AutomationJourneysGetRequestStatus = {
  InProgress: "in_progress",
  Completed: "completed",
  ExitedEarly: "exited_early",
  All: "all",
} as const;
export type AutomationJourneysGetRequestStatus =
  | (typeof AutomationJourneysGetRequestStatus)[keyof typeof AutomationJourneysGetRequestStatus]
  | (string & {});

export const automationJourneysGetRequestStatusSchema: EnumSchema<AutomationJourneysGetRequestStatus> =
  s.enumOf<AutomationJourneysGetRequestStatus>(AutomationJourneysGetRequestStatus);
