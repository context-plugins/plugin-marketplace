import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pipelineSchema, type Pipeline } from "./pipeline.js";

export type CountedPipeline = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: Pipeline[];
};

export const countedPipelineSchema: Schema<CountedPipeline> = s.object<CountedPipeline>({
  count: s.int(),
  items: s.array(s.lazy(() => pipelineSchema)),
});
