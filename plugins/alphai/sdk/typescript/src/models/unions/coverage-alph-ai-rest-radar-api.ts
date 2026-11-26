import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CoverageAlphAiRestRadarApi = number;

export const coverageAlphAiRestRadarApiSchema: Schema<CoverageAlphAiRestRadarApi> =
  s.of<CoverageAlphAiRestRadarApi>(s.union([s.float64()]));
