import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rddOperationClusterSchema, type RddOperationCluster } from "./rdd-operation-cluster.js";
import { rddOperationEdgeSchema, type RddOperationEdge } from "./rdd-operation-edge.js";

/** RDD operation graph for a Spark Application Stage. */
export type RddOperationGraph1 = {
  /** A grouping of nodes representing higher level constructs (stage, job etc.). */
  rootCluster?: RddOperationCluster;
  edges?: RddOperationEdge[];
  outgoingEdges?: RddOperationEdge[];
  stageId?: string;
  incomingEdges?: RddOperationEdge[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddOperationGraph1Schema: Schema<RddOperationGraph1> = s.object<RddOperationGraph1>(
  {
    rootCluster: s.optional(s.lazy(() => rddOperationClusterSchema)),
    edges: s.optional(s.array(s.lazy(() => rddOperationEdgeSchema))),
    outgoingEdges: s.optional(s.array(s.lazy(() => rddOperationEdgeSchema))),
    stageId: s.optional(s.string()),
    incomingEdges: s.optional(s.array(s.lazy(() => rddOperationEdgeSchema))),
  },
  { additionalProperties: s.json() },
);
