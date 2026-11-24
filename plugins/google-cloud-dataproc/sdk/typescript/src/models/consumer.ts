import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Contains information of the customer's network configurations. */
export type Consumer = {
  /**
   * Output only. The location of the endpoint URI. Format: projects/{project}/locations/{location}.
   */
  endpointLocation?: string;
  /** Output only. The URI of the endpoint used to access the metastore service. */
  endpointUri?: string;
  /**
   * Immutable. The subnetwork of the customer project from which an IP address is reserved and used
   * as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to
   * all hosts in a subnet in the same region and same network. There must be at least one IP
   * address available in the subnet's primary range. The subnet is specified in the following
   * form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}
   */
  subnetwork?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const consumerSchema: Schema<Consumer> = s.object<Consumer>(
  {
    endpointLocation: s.optional(s.string()),
    endpointUri: s.optional(s.string()),
    subnetwork: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
