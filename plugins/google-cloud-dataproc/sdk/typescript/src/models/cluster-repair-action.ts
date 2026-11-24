import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Repair action to take on the cluster resource. */
export const ClusterRepairAction = {
  ClusterRepairActionUnspecified: "CLUSTER_REPAIR_ACTION_UNSPECIFIED",
  RepairErrorDueToUpdateCluster: "REPAIR_ERROR_DUE_TO_UPDATE_CLUSTER",
} as const;
export type ClusterRepairAction =
  | (typeof ClusterRepairAction)[keyof typeof ClusterRepairAction]
  | (string & {});

export const clusterRepairActionSchema: EnumSchema<ClusterRepairAction> =
  s.enumOf<ClusterRepairAction>(ClusterRepairAction);
