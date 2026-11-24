import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { coverageKeyedSchema, type CoverageKeyed } from "../coverage-keyed.js";
import { coverageSummarySchema, type CoverageSummary } from "../coverage-summary.js";

export type V2CoverageResponse = CoverageSummary | CoverageKeyed;

export const v2CoverageResponseSchema: Schema<V2CoverageResponse> = s.of<V2CoverageResponse>(
  s.union([s.lazy(() => coverageSummarySchema), s.lazy(() => coverageKeyedSchema)]),
);
