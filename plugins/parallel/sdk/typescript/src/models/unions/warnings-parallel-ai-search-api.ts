import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { warningSchema, type Warning } from "../warning.js";

/** Warnings for the search request, if any. */
export type WarningsParallelAiSearchApi = Warning[];

export const warningsParallelAiSearchApiSchema: Schema<WarningsParallelAiSearchApi> =
  s.of<WarningsParallelAiSearchApi>(s.union([s.array(s.lazy(() => warningSchema))]));
