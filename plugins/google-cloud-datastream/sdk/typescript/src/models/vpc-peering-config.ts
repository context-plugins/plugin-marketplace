import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's
 * VPC.
 */
export type VpcPeeringConfig = {
  /** Required. A free subnet for peering. (CIDR of /29) */
  subnet?: string;
  /**
   * Required. Fully qualified name of the VPC that Datastream will peer to. Format:
   * `projects/{project}/global/{networks}/{name}`
   */
  vpc?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vpcPeeringConfigSchema: Schema<VpcPeeringConfig> = s.object<VpcPeeringConfig>(
  {
    subnet: s.optional(s.string()),
    vpc: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
