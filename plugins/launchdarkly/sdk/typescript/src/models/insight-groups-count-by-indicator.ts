import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightGroupsCountByIndicator = {
  /** The number of insight groups with an excellent indicator */
  excellent: number;
  /** The number of insight groups with a good indicator */
  good: number;
  /** The number of insight groups with a fair indicator */
  fair: number;
  /** The number of insight groups with a needs attention indicator */
  needsAttention: number;
  /** The number of insight groups with a not calculated indicator */
  notCalculated: number;
  /** The number of insight groups with an unknown indicator */
  unknown: number;
  /** The total number of insight groups */
  total: number;
};

export const insightGroupsCountByIndicatorSchema: Schema<InsightGroupsCountByIndicator> =
  s.object<InsightGroupsCountByIndicator>({
    excellent: s.int(),
    good: s.int(),
    fair: s.int(),
    needsAttention: s.int(),
    notCalculated: s.int(),
    unknown: s.int(),
    total: s.int(),
  });
