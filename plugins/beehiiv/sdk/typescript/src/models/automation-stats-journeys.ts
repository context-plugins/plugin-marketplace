import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Journey counts for an automation. */
export type AutomationStatsJourneys = {
  /** Number of journeys currently in progress @default 0 */
  running?: number;
  /** Number of completed journeys @default 0 */
  completed?: number;
  /** Total number of journeys @default 0 */
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationStatsJourneysSchema: Schema<AutomationStatsJourneys> =
  s.object<AutomationStatsJourneys>(
    {
      running: s.defaulted(s.int(), 0),
      completed: s.defaulted(s.int(), 0),
      total: s.defaulted(s.int(), 0),
    },
    { additionalProperties: s.json() },
  );
