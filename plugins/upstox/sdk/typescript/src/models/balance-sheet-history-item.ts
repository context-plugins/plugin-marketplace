import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BalanceSheetHistoryItem = {
  /** Total assets in the reported period */
  totalAsset?: number;
  /** Total liabilities in the reported period */
  totalLiability?: number;
  /** Reporting period */
  period?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceSheetHistoryItemSchema: Schema<BalanceSheetHistoryItem> =
  s.object<BalanceSheetHistoryItem>(
    {
      totalAsset: s.optional(s.float64()),
      totalLiability: s.optional(s.float64()),
      period: s.optional(s.string()),
      _keysMap: {
        totalAsset: "total_asset",
        totalLiability: "total_liability",
      },
    },
    { additionalProperties: s.json() },
  );
