import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterRepairActionSchema, type ClusterRepairAction } from "./cluster-repair-action.js";

/** Optional. Cluster to be repaired */
export type ClusterToRepair2 = {
  /** Required. Repair action to take on the cluster resource. */
  clusterRepairAction?: ClusterRepairAction;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterToRepair2Schema: Schema<ClusterToRepair2> = s.object<ClusterToRepair2>(
  {
    clusterRepairAction: s.optional(s.lazy(() => clusterRepairActionSchema)),
  },
  { additionalProperties: s.json() },
);
