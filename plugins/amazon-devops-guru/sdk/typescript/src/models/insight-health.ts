import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightHealth = {
  /** The number of open proactive insights. */
  openProactiveInsights?: number;
  /** The number of open reactive insights. */
  openReactiveInsights?: number;
  /** The Meant Time to Recover (MTTR) for the insight. */
  meanTimeToRecoverInMilliseconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightHealthSchema: Schema<InsightHealth> = s.object<InsightHealth>(
  {
    openProactiveInsights: s.optional(s.int()),
    openReactiveInsights: s.optional(s.int()),
    meanTimeToRecoverInMilliseconds: s.optional(s.int()),
    _keysMap: {
      openProactiveInsights: "OpenProactiveInsights",
      openReactiveInsights: "OpenReactiveInsights",
      meanTimeToRecoverInMilliseconds: "MeanTimeToRecoverInMilliseconds",
    },
  },
  { additionalProperties: s.json() },
);
