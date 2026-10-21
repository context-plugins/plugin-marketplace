import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightGroupScoresSchema, type InsightGroupScores } from "./insight-group-scores.js";
import { insightPeriodSchema, type InsightPeriod } from "./insight-period.js";
import { linkSchema, type Link } from "./link.js";

export type InsightScores = {
  period: InsightPeriod;
  lastPeriod: InsightPeriod;
  scores: InsightGroupScores;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const insightScoresSchema: Schema<InsightScores> = s.object<InsightScores>({
  period: insightPeriodSchema,
  lastPeriod: insightPeriodSchema,
  scores: insightGroupScoresSchema,
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  _keysMap: {
    links: "_links",
  },
});
