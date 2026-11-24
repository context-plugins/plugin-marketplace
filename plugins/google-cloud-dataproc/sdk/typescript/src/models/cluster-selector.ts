import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A selector that chooses target cluster for jobs based on metadata. */
export type ClusterSelector = {
  /**
   * Optional. The zone where workflow process executes. This parameter does not affect the
   * selection of the cluster.If unspecified, the zone of the first cluster matching the selector is
   * used.
   */
  zone?: string;
  /** Required. The cluster labels. Cluster must have all labels to match. */
  clusterLabels?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterSelectorSchema: Schema<ClusterSelector> = s.object<ClusterSelector>(
  {
    zone: s.optional(s.string()),
    clusterLabels: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
