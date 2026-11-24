import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Node Group Affinity for clusters using sole-tenant node groups. The NodeGroupAffinity resource is
 * not related to the NodeGroup resource.
 */
export type NodeGroupAffinity = {
  /**
   * Required. The URI of a sole-tenant node group resource
   * (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be
   * created on.A full URL, partial URI, or node group name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1
   * projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1
   */
  nodeGroupUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nodeGroupAffinitySchema: Schema<NodeGroupAffinity> = s.object<NodeGroupAffinity>(
  {
    nodeGroupUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
