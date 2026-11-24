import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The type of the cluster. */
export const ClusterType = {
  ClusterTypeUnspecified: "CLUSTER_TYPE_UNSPECIFIED",
  Standard: "STANDARD",
  SingleNode: "SINGLE_NODE",
  ZeroScale: "ZERO_SCALE",
} as const;
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType] | (string & {});

export const clusterTypeSchema: EnumSchema<ClusterType> = s.enumOf<ClusterType>(ClusterType);
