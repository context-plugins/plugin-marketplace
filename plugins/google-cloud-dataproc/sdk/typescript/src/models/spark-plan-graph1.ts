import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkPlanGraphEdgeSchema, type SparkPlanGraphEdge } from "./spark-plan-graph-edge.js";
import {
  sparkPlanGraphNodeWrapperSchema,
  type SparkPlanGraphNodeWrapper,
} from "./spark-plan-graph-node-wrapper.js";

/** SparkPlanGraph for a Spark Application execution. */
export type SparkPlanGraph1 = {
  edges?: SparkPlanGraphEdge[];
  executionId?: string;
  nodes?: SparkPlanGraphNodeWrapper[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkPlanGraph1Schema: Schema<SparkPlanGraph1> = s.object<SparkPlanGraph1>(
  {
    edges: s.optional(s.array(s.lazy(() => sparkPlanGraphEdgeSchema))),
    executionId: s.optional(s.string()),
    nodes: s.optional(s.array(s.lazy(() => sparkPlanGraphNodeWrapperSchema))),
  },
  { additionalProperties: s.json() },
);
