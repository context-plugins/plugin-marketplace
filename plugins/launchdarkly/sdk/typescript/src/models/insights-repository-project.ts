import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsRepositoryProject = {
  /** The repository key */
  repositoryKey: string;
  /** The project key */
  projectKey: string;
};

export const insightsRepositoryProjectSchema: Schema<InsightsRepositoryProject> =
  s.object<InsightsRepositoryProject>({
    repositoryKey: s.string(),
    projectKey: s.string(),
  });
