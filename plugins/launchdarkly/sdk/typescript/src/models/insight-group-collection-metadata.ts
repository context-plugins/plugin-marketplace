import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightGroupsCountByIndicatorSchema,
  type InsightGroupsCountByIndicator,
} from "./insight-groups-count-by-indicator.js";

export type InsightGroupCollectionMetadata = {
  countByIndicator: InsightGroupsCountByIndicator;
};

export const insightGroupCollectionMetadataSchema: Schema<InsightGroupCollectionMetadata> =
  s.object<InsightGroupCollectionMetadata>({
    countByIndicator: insightGroupsCountByIndicatorSchema,
  });
