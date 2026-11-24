import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";
import { pscInterfaceConfig1Schema, type PscInterfaceConfig1 } from "./psc-interface-config1.js";
import { state2Schema, type State2 } from "./state2.js";
import { vpcPeeringConfig2Schema, type VpcPeeringConfig2 } from "./vpc-peering-config2.js";

/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a
 * customer's network.
 */
export type PrivateConnection = {
  /** Output only. The state of the Private Connection. */
  state?: State2;
  /** Output only. In case of error, the details of the error in a user-friendly format. */
  error?: Error2;
  /** Labels. */
  labels?: Record<string, string>;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** VPC Peering Config. */
  vpcPeeringConfig?: VpcPeeringConfig2;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** PSC Interface Config. */
  pscInterfaceConfig?: PscInterfaceConfig1;
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const privateConnectionSchema: Schema<PrivateConnection> = s.object<PrivateConnection>(
  {
    state: s.optional(s.lazy(() => state2Schema)),
    error: s.optional(s.lazy(() => error2Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    displayName: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    vpcPeeringConfig: s.optional(s.lazy(() => vpcPeeringConfig2Schema)),
    satisfiesPzs: s.optional(s.boolean()),
    satisfiesPzi: s.optional(s.boolean()),
    createTime: s.optional(s.string()),
    pscInterfaceConfig: s.optional(s.lazy(() => pscInterfaceConfig1Schema)),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
