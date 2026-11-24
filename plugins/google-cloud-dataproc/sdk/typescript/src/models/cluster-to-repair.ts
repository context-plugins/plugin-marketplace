import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterRepairActionSchema, type ClusterRepairAction } from "./cluster-repair-action.js";

/** Cluster to be repaired */
export type ClusterToRepair = {
  /** Required. Repair action to take on the cluster resource. */
  clusterRepairAction?: ClusterRepairAction;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterToRepairSchema: Schema<ClusterToRepair> = s.object<ClusterToRepair>(
  {
    clusterRepairAction: s.optional(s.lazy(() => clusterRepairActionSchema)),
  },
  { additionalProperties: s.json() },
);
