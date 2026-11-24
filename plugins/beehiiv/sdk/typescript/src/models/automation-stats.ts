import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationStatsEmail2Schema, type AutomationStatsEmail2 } from "./automation-stats-email2.js";
import {
  automationStatsJourneys2Schema,
  type AutomationStatsJourneys2,
} from "./automation-stats-journeys2.js";

/**
 * Optional statistics for an automation. Retrievable by including `expand: [stats]` in the
 * automation request.
 */
export type AutomationStats = {
  /** Journey counts for the automation */
  journeys?: AutomationStatsJourneys2;
  /** Aggregate email engagement statistics */
  email?: AutomationStatsEmail2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationStatsSchema: Schema<AutomationStats> = s.object<AutomationStats>(
  {
    journeys: s.optional(s.lazy(() => automationStatsJourneys2Schema)),
    email: s.optional(s.lazy(() => automationStatsEmail2Schema)),
  },
  { additionalProperties: s.json() },
);
