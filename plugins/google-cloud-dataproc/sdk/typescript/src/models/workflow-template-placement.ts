import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterSelector2Schema, type ClusterSelector2 } from "./cluster-selector2.js";
import { managedCluster2Schema, type ManagedCluster2 } from "./managed-cluster2.js";

/** Specifies workflow execution target.Either managed_cluster or cluster_selector is required. */
export type WorkflowTemplatePlacement = {
  /**
   * Optional. A selector that chooses target cluster for jobs based on metadata.The selector is
   * evaluated at the time each job is submitted.
   */
  clusterSelector?: ClusterSelector2;
  /** A cluster that is managed by the workflow. */
  managedCluster?: ManagedCluster2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTemplatePlacementSchema: Schema<WorkflowTemplatePlacement> =
  s.object<WorkflowTemplatePlacement>(
    {
      clusterSelector: s.optional(s.lazy(() => clusterSelector2Schema)),
      managedCluster: s.optional(s.lazy(() => managedCluster2Schema)),
    },
    { additionalProperties: s.json() },
  );
