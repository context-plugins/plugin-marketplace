import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The cluster tier. */
export const ClusterTier = {
  ClusterTierUnspecified: "CLUSTER_TIER_UNSPECIFIED",
  ClusterTierStandard: "CLUSTER_TIER_STANDARD",
  ClusterTierPremium: "CLUSTER_TIER_PREMIUM",
} as const;
export type ClusterTier = (typeof ClusterTier)[keyof typeof ClusterTier] | (string & {});

export const clusterTierSchema: EnumSchema<ClusterTier> = s.enumOf<ClusterTier>(ClusterTier);
