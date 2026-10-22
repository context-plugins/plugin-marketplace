import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightGroupCollectionMetadataSchema,
  type InsightGroupCollectionMetadata,
} from "./insight-group-collection-metadata.js";
import {
  insightGroupCollectionScoreMetadataSchema,
  type InsightGroupCollectionScoreMetadata,
} from "./insight-group-collection-score-metadata.js";
import { insightGroupSchema, type InsightGroup } from "./insight-group.js";
import { linkSchema, type Link } from "./link.js";

export type InsightGroupCollection = {
  /** The total number of insight groups */
  totalCount: number;
  /** A list of insight groups */
  items: InsightGroup[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  metadata?: InsightGroupCollectionMetadata;
  scoreMetadata?: InsightGroupCollectionScoreMetadata;
};

export const insightGroupCollectionSchema: Schema<InsightGroupCollection> = s.object<InsightGroupCollection>({
  totalCount: s.int(),
  items: s.array(s.lazy(() => insightGroupSchema)),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  metadata: s.optional(s.lazy(() => insightGroupCollectionMetadataSchema)),
  scoreMetadata: s.optional(s.lazy(() => insightGroupCollectionScoreMetadataSchema)),
  _keysMap: {
    links: "_links",
  },
});
