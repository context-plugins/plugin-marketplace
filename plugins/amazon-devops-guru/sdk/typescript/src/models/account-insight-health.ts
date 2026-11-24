import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AccountInsightHealth = {
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services
   * account.
   */
  openProactiveInsights?: number;
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services
   * account.
   */
  openReactiveInsights?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountInsightHealthSchema: Schema<AccountInsightHealth> = s.object<AccountInsightHealth>(
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
