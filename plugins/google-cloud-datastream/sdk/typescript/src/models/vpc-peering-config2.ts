import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** VPC Peering Config. */
export type VpcPeeringConfig2 = {
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

export const vpcPeeringConfig2Schema: Schema<VpcPeeringConfig2> = s.object<VpcPeeringConfig2>(
  {
    subnet: s.optional(s.string()),
    vpc: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
