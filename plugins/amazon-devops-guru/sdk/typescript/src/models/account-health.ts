import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountInsightHealthSchema, type AccountInsightHealth } from "./account-insight-health.js";

export type AccountHealth = {
  /** The ID of the Amazon Web Services account. */
  accountId?: string;
  insight?: AccountInsightHealth;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountHealthSchema: Schema<AccountHealth> = s.object<AccountHealth>(
  {
    accountId: s.optional(s.string()),
    insight: s.optional(s.lazy(() => accountInsightHealthSchema)),
    _keysMap: {
      accountId: "AccountId",
      insight: "Insight",
    },
  },
  { additionalProperties: s.json() },
);
