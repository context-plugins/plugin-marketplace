import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsRepositoryProjectSchema,
  type InsightsRepositoryProject,
} from "./insights-repository-project.js";

export type InsightsRepositoryProjectMappings = {
  mappings: InsightsRepositoryProject[];
};

export const insightsRepositoryProjectMappingsSchema: Schema<InsightsRepositoryProjectMappings> =
  s.object<InsightsRepositoryProjectMappings>({
    mappings: s.array(s.lazy(() => insightsRepositoryProjectSchema)),
  });
