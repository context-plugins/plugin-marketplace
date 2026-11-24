import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelSuggestedTasksetSchema, type ModelSuggestedTaskset } from "./model-suggested-taskset.js";

export type SuggestedTasksetsResponse = {
  suggested: ModelSuggestedTaskset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestedTasksetsResponseSchema: Schema<SuggestedTasksetsResponse> =
  s.object<SuggestedTasksetsResponse>(
    {
      suggested: s.array(s.lazy(() => modelSuggestedTasksetSchema)),
    },
    { additionalProperties: s.json() },
  );
