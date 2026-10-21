import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsRepositorySchema, type InsightsRepository } from "./insights-repository.js";
import { linkSchema, type Link } from "./link.js";

export type InsightsRepositoryCollection = {
  /** Total number of repositories */
  totalCount: number;
  /** List of repositories */
  items: InsightsRepository[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const insightsRepositoryCollectionSchema: Schema<InsightsRepositoryCollection> =
  s.object<InsightsRepositoryCollection>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => insightsRepositorySchema)),
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
