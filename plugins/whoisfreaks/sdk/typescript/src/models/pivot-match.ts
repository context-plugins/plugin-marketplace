import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PivotMatch = {
  pivot?: string;
  pivotType?: string;
  totalRelatedThreats?: number;
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pivotMatchSchema: Schema<PivotMatch> = s.object<PivotMatch>(
  {
    pivot: s.optional(s.string()),
    pivotType: s.optional(s.string()),
    totalRelatedThreats: s.optional(s.int()),
    confidence: s.optional(s.float64()),
    _keysMap: {
      pivotType: "pivot_type",
      totalRelatedThreats: "total_related_threats",
    },
  },
  { additionalProperties: s.json() },
);
