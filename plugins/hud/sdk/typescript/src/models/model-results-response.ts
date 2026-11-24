import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelSuggestedTasksetSchema, type ModelSuggestedTaskset } from "./model-suggested-taskset.js";
import { modelTasksetResultRowSchema, type ModelTasksetResultRow } from "./model-taskset-result-row.js";

export type ModelResultsResponse = {
  modelId: string;
  checkpointIds?: string[];
  results: ModelTasksetResultRow[];
  suggested: ModelSuggestedTaskset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelResultsResponseSchema: Schema<ModelResultsResponse> = s.object<ModelResultsResponse>(
  {
    modelId: s.string(),
    checkpointIds: s.optional(s.array(s.string())),
    results: s.array(s.lazy(() => modelTasksetResultRowSchema)),
    suggested: s.array(s.lazy(() => modelSuggestedTasksetSchema)),
    _keysMap: {
      modelId: "model_id",
      checkpointIds: "checkpoint_ids",
    },
  },
  { additionalProperties: s.json() },
);
