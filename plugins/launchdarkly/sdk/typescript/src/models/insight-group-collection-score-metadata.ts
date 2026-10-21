import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightPeriodSchema, type InsightPeriod } from "./insight-period.js";

export type InsightGroupCollectionScoreMetadata = {
  period: InsightPeriod;
  lastPeriod: InsightPeriod;
};

export const insightGroupCollectionScoreMetadataSchema: Schema<InsightGroupCollectionScoreMetadata> =
  s.object<InsightGroupCollectionScoreMetadata>({
    period: insightPeriodSchema,
    lastPeriod: insightPeriodSchema,
  });
