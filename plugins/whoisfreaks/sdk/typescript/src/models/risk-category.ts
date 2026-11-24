import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pivotMatchSchema, type PivotMatch } from "./pivot-match.js";
import { threatSourceSchema, type ThreatSource } from "./threat-source.js";

export type RiskCategory = {
  verdict?: string;
  confidence?: number;
  primaryThreat?: string;
  severity?: string;
  threatTypes?: string[];
  sources?: ThreatSource[];
  pivotMatches?: PivotMatch[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const riskCategorySchema: Schema<RiskCategory> = s.object<RiskCategory>(
  {
    verdict: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    primaryThreat: s.optional(s.string()),
    severity: s.optional(s.string()),
    threatTypes: s.optional(s.array(s.string())),
    sources: s.optional(s.array(s.lazy(() => threatSourceSchema))),
    pivotMatches: s.optional(s.array(s.lazy(() => pivotMatchSchema))),
    _keysMap: {
      primaryThreat: "primary_threat",
      threatTypes: "threat_types",
      pivotMatches: "pivot_matches",
    },
  },
  { additionalProperties: s.json() },
);
