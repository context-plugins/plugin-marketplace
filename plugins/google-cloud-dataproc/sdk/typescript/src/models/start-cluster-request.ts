import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to start a cluster. */
export type StartClusterRequest = {
  /**
   * Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a
   * cluster with the specified UUID does not exist.
   */
  clusterUuid?: string;
  /**
   * Optional. A unique ID used to identify the request. If the server receives two
   * StartClusterRequest
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.StartClusterRequest)s
   * with the same id, then the second request will be ignored and the first
   * google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set
   * this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must
   * contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum
   * length is 40 characters.
   */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startClusterRequestSchema: Schema<StartClusterRequest> = s.object<StartClusterRequest>(
  {
    clusterUuid: s.optional(s.string()),
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
