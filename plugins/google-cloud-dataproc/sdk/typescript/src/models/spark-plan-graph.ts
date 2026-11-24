import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkPlanGraphEdgeSchema, type SparkPlanGraphEdge } from "./spark-plan-graph-edge.js";
import {
  sparkPlanGraphNodeWrapperSchema,
  type SparkPlanGraphNodeWrapper,
} from "./spark-plan-graph-node-wrapper.js";

/** A graph used for storing information of an executionPlan of DataFrame. */
export type SparkPlanGraph = {
  edges?: SparkPlanGraphEdge[];
  executionId?: string;
  nodes?: SparkPlanGraphNodeWrapper[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkPlanGraphSchema: Schema<SparkPlanGraph> = s.object<SparkPlanGraph>(
  {
    edges: s.optional(s.array(s.lazy(() => sparkPlanGraphEdgeSchema))),
    executionId: s.optional(s.string()),
    nodes: s.optional(s.array(s.lazy(() => sparkPlanGraphNodeWrapperSchema))),
  },
  { additionalProperties: s.json() },
);
