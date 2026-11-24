import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rddOperationNodeSchema, type RddOperationNode } from "./rdd-operation-node.js";

/** A grouping of nodes representing higher level constructs (stage, job etc.). */
export type RddOperationCluster = {
  rddClusterId?: string;
  name?: string;
  childClusters?: RddOperationCluster[];
  childNodes?: RddOperationNode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddOperationClusterSchema: Schema<RddOperationCluster> = s.object<RddOperationCluster>(
  {
    rddClusterId: s.optional(s.string()),
    name: s.optional(s.string()),
    childClusters: s.optional(s.array(s.lazy(() => rddOperationClusterSchema))),
    childNodes: s.optional(s.array(s.lazy(() => rddOperationNodeSchema))),
  },
  { additionalProperties: s.json() },
);
