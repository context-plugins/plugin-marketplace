import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to resize a node group. */
export type ResizeNodeGroupRequest = {
  /**
   * Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/scaling-clusters#graceful_decommissioning)
   * allows the removal of nodes from the Compute Engine node group without interrupting jobs in
   * progress. This timeout specifies how long to wait for jobs in progress to finish before
   * forcefully removing nodes (and potentially interrupting jobs). Default timeout is 0 (for
   * forceful decommission), and the maximum allowed timeout is 1 day. (see JSON representation of
   * Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).Only supported on
   * Dataproc image versions 1.2 and higher.
   */
  gracefulDecommissionTimeout?: string;
  /**
   * Optional. A unique ID used to identify the request. If the server receives two
   * ResizeNodeGroupRequest
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.ResizeNodeGroupRequests)
   * with the same ID, the second request is ignored and the first google.longrunning.Operation
   * created and stored in the backend is returned.Recommendation: Set this value to a UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters
   * (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
   * characters.
   */
  requestId?: string;
  /** Optional. operation id of the parent operation sending the resize request */
  parentOperationId?: string;
  /**
   * Required. The number of running instances for the node group to maintain. The group adds or
   * removes instances to maintain the number of instances specified by this parameter.
   */
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resizeNodeGroupRequestSchema: Schema<ResizeNodeGroupRequest> = s.object<ResizeNodeGroupRequest>(
  {
    gracefulDecommissionTimeout: s.optional(s.string()),
    requestId: s.optional(s.string()),
    parentOperationId: s.optional(s.string()),
    size: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
