import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The type of the clusters for which this autoscaling policy is to be configured. */
export const ClusterType1 = {
  ClusterTypeUnspecified: "CLUSTER_TYPE_UNSPECIFIED",
  Standard: "STANDARD",
  ZeroScale: "ZERO_SCALE",
} as const;
export type ClusterType1 = (typeof ClusterType1)[keyof typeof ClusterType1] | (string & {});

export const clusterType1Schema: EnumSchema<ClusterType1> = s.enumOf<ClusterType1>(ClusterType1);
