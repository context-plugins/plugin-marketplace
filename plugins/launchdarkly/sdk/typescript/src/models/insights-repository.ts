import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  projectSummaryCollectionSchema,
  type ProjectSummaryCollection,
} from "./project-summary-collection.js";

export type InsightsRepository = {
  /** The repository ID */
  id: string;
  /** The repository version */
  version: number;
  /** The repository key */
  key: string;
  /** The repository type */
  type: string;
  /** The repository URL */
  url: string;
  /** The repository main branch */
  mainBranch: string;
  projects?: ProjectSummaryCollection;
};

export const insightsRepositorySchema: Schema<InsightsRepository> = s.object<InsightsRepository>({
  id: s.string(),
  version: s.int(),
  key: s.string(),
  type: s.string(),
  url: s.string(),
  mainBranch: s.string(),
  projects: s.optional(s.lazy(() => projectSummaryCollectionSchema)),
  _keysMap: {
    id: "_id",
  },
});
