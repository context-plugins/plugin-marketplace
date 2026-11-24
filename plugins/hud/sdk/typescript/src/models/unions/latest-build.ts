import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latestBuildSummarySchema, type LatestBuildSummary } from "../latest-build-summary.js";

export type LatestBuild = LatestBuildSummary;

export const latestBuildSchema: Schema<LatestBuild> = s.of<LatestBuild>(
  s.union([s.lazy(() => latestBuildSummarySchema)]),
);
