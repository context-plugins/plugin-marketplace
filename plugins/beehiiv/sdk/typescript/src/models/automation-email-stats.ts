import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  automationEmailStatsClicksSchema,
  type AutomationEmailStatsClicks,
} from "./automation-email-stats-clicks.js";
import {
  automationEmailStatsEmail2Schema,
  type AutomationEmailStatsEmail2,
} from "./automation-email-stats-email2.js";

/** Statistics for an automation email message. */
export type AutomationEmailStats = {
  /** Stats scoped to email recipients */
  email?: AutomationEmailStatsEmail2;
  /** An array of click statistics for each URL in the email */
  clicks?: AutomationEmailStatsClicks[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationEmailStatsSchema: Schema<AutomationEmailStats> = s.object<AutomationEmailStats>(
  {
    email: s.optional(s.lazy(() => automationEmailStatsEmail2Schema)),
    clicks: s.optional(s.array(s.lazy(() => automationEmailStatsClicksSchema))),
  },
  { additionalProperties: s.json() },
);
