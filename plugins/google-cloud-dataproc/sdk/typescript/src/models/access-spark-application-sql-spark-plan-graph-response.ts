import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkPlanGraph1Schema, type SparkPlanGraph1 } from "./spark-plan-graph1.js";

/** SparkPlanGraph for a Spark Application execution limited to maximum 10000 clusters. */
export type AccessSparkApplicationSqlSparkPlanGraphResponse = {
  /** SparkPlanGraph for a Spark Application execution. */
  sparkPlanGraph?: SparkPlanGraph1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSparkApplicationSqlSparkPlanGraphResponseSchema: Schema<AccessSparkApplicationSqlSparkPlanGraphResponse> =
  s.object<AccessSparkApplicationSqlSparkPlanGraphResponse>(
    {
      sparkPlanGraph: s.optional(s.lazy(() => sparkPlanGraph1Schema)),
    },
    { additionalProperties: s.json() },
  );
