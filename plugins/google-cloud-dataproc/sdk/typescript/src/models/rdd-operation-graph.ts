import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rddOperationClusterSchema, type RddOperationCluster } from "./rdd-operation-cluster.js";
import { rddOperationEdgeSchema, type RddOperationEdge } from "./rdd-operation-edge.js";

/** Graph representing RDD dependencies. Consists of edges and a root cluster. */
export type RddOperationGraph = {
  /** A grouping of nodes representing higher level constructs (stage, job etc.). */
  rootCluster?: RddOperationCluster;
  edges?: RddOperationEdge[];
  outgoingEdges?: RddOperationEdge[];
  stageId?: string;
  incomingEdges?: RddOperationEdge[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddOperationGraphSchema: Schema<RddOperationGraph> = s.object<RddOperationGraph>(
  {
    rootCluster: s.optional(s.lazy(() => rddOperationClusterSchema)),
    edges: s.optional(s.array(s.lazy(() => rddOperationEdgeSchema))),
    outgoingEdges: s.optional(s.array(s.lazy(() => rddOperationEdgeSchema))),
    stageId: s.optional(s.string()),
    incomingEdges: s.optional(s.array(s.lazy(() => rddOperationEdgeSchema))),
  },
  { additionalProperties: s.json() },
);
