import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inferenceUsageGroupSchema, type InferenceUsageGroup } from "./inference-usage-group.js";

export type InferenceUsageBucket = {
  start: Date;
  groups: InferenceUsageGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inferenceUsageBucketSchema: Schema<InferenceUsageBucket> = s.object<InferenceUsageBucket>(
  {
    start: s.dateTime(),
    groups: s.array(s.lazy(() => inferenceUsageGroupSchema)),
  },
  { additionalProperties: s.json() },
);
