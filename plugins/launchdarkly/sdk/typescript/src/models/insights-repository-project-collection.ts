import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsRepositoryProjectSchema,
  type InsightsRepositoryProject,
} from "./insights-repository-project.js";
import { linkSchema, type Link } from "./link.js";

export type InsightsRepositoryProjectCollection = {
  /** Total number of repository project associations */
  totalCount: number;
  /** List of repository project associations */
  items: InsightsRepositoryProject[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const insightsRepositoryProjectCollectionSchema: Schema<InsightsRepositoryProjectCollection> =
  s.object<InsightsRepositoryProjectCollection>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => insightsRepositoryProjectSchema)),
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
