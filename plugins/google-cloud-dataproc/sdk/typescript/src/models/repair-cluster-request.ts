import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterToRepair2Schema, type ClusterToRepair2 } from "./cluster-to-repair2.js";
import { nodePoolSchema, type NodePool } from "./node-pool.js";

/** A request to repair a cluster. */
export type RepairClusterRequest = {
  /** Optional. Cluster to be repaired */
  cluster?: ClusterToRepair2;
  /**
   * Optional. Whether the request is submitted by a super user. If true, IAM will check
   * 'dataproc.clusters.repair' permission instead of 'dataproc.clusters.update' permission. This is
   * to give Dataproc superuser the ability to repair clusters without granting the overly broad
   * update permission.
   */
  dataprocSuperUser?: boolean;
  /**
   * Optional. A unique ID used to identify the request. If the server receives two
   * RepairClusterRequests with the same ID, the second request is ignored, and the first
   * google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set
   * this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must
   * contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum
   * length is 40 characters.
   */
  requestId?: string;
  /**
   * Optional. Node pools and corresponding repair action to be taken. All node pools should be
   * unique in this request. i.e. Multiple entries for the same node pool id are not allowed.
   */
  nodePools?: NodePool[];
  /**
   * Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a
   * cluster with the specified UUID does not exist.
   */
  clusterUuid?: string;
  /**
   * Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the
   * removal of cluster nodes without interrupting jobs in progress. The timeout specifies the
   * amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is
   * 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON
   * Mapping—Duration
   * (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout
   * is supported in image versions 1.2+.
   */
  gracefulDecommissionTimeout?: string;
  /** Optional. operation id of the parent operation sending the repair request */
  parentOperationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repairClusterRequestSchema: Schema<RepairClusterRequest> = s.object<RepairClusterRequest>(
  {
    cluster: s.optional(s.lazy(() => clusterToRepair2Schema)),
    dataprocSuperUser: s.optional(s.boolean()),
    requestId: s.optional(s.string()),
    nodePools: s.optional(s.array(s.lazy(() => nodePoolSchema))),
    clusterUuid: s.optional(s.string()),
    gracefulDecommissionTimeout: s.optional(s.string()),
    parentOperationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
