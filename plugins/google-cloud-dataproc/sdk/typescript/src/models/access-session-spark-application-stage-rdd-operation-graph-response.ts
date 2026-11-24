import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rddOperationGraph1Schema, type RddOperationGraph1 } from "./rdd-operation-graph1.js";

/** RDD operation graph for a Spark Application Stage limited to maximum 10000 clusters. */
export type AccessSessionSparkApplicationStageRddOperationGraphResponse = {
  /** RDD operation graph for a Spark Application Stage. */
  rddOperationGraph?: RddOperationGraph1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSessionSparkApplicationStageRddOperationGraphResponseSchema: Schema<AccessSessionSparkApplicationStageRddOperationGraphResponse> =
  s.object<AccessSessionSparkApplicationStageRddOperationGraphResponse>(
    {
      rddOperationGraph: s.optional(s.lazy(() => rddOperationGraph1Schema)),
    },
    { additionalProperties: s.json() },
  );
