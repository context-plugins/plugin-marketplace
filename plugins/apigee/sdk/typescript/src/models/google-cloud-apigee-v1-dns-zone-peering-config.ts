import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Fields for DNS PEERING zone. */
export type GoogleCloudApigeeV1DnsZonePeeringConfig = {
  /** Required. The ID of the project that contains the producer VPC network. */
  targetProjectId?: string;
  /**
   * Required. The VPC network where the records for that private DNS zone's namespace are
   * available. Apigee will be performing DNS peering with this VPC network.
   */
  targetNetworkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DnsZonePeeringConfigSchema: Schema<GoogleCloudApigeeV1DnsZonePeeringConfig> =
  s.object<GoogleCloudApigeeV1DnsZonePeeringConfig>(
    {
      targetProjectId: s.optional(s.string()),
      targetNetworkId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
