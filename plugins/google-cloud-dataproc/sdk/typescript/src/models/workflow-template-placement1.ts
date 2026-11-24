import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterSelector2Schema, type ClusterSelector2 } from "./cluster-selector2.js";
import { managedCluster2Schema, type ManagedCluster2 } from "./managed-cluster2.js";

/** Required. WorkflowTemplate scheduling information. */
export type WorkflowTemplatePlacement1 = {
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

export const workflowTemplatePlacement1Schema: Schema<WorkflowTemplatePlacement1> =
  s.object<WorkflowTemplatePlacement1>(
    {
      clusterSelector: s.optional(s.lazy(() => clusterSelector2Schema)),
      managedCluster: s.optional(s.lazy(() => managedCluster2Schema)),
    },
    { additionalProperties: s.json() },
  );
