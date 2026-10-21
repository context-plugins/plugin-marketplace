import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { releasePipelineSchema, type ReleasePipeline } from "./release-pipeline.js";

export type ReleasePipelineCollection = {
  /** An array of release pipelines */
  items: ReleasePipeline[];
  /** Total number of release pipelines */
  totalCount: number;
};

export const releasePipelineCollectionSchema: Schema<ReleasePipelineCollection> =
  s.object<ReleasePipelineCollection>({
    items: s.array(s.lazy(() => releasePipelineSchema)),
    totalCount: s.int(),
  });
