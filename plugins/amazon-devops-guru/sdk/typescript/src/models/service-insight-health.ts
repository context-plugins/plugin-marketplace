import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceInsightHealth = {
  /** The number of open proactive insights in the Amazon Web Services service */
  openProactiveInsights?: number;
  /** The number of open reactive insights in the Amazon Web Services service */
  openReactiveInsights?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceInsightHealthSchema: Schema<ServiceInsightHealth> = s.object<ServiceInsightHealth>(
  {
    openProactiveInsights: s.optional(s.int()),
    openReactiveInsights: s.optional(s.int()),
    _keysMap: {
      openProactiveInsights: "OpenProactiveInsights",
      openReactiveInsights: "OpenReactiveInsights",
    },
  },
  { additionalProperties: s.json() },
);
