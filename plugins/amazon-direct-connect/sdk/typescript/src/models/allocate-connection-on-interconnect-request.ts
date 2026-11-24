import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AllocateConnectionOnInterconnectRequest = {
  /**
   * The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps,
   * 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners
   * who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted
   * connection.
   */
  bandwidth: string;
  /** The name of the provisioned connection. */
  connectionName: string;
  /**
   * The ID of the Amazon Web Services account of the customer for whom the connection will be
   * provisioned.
   */
  ownerAccount: string;
  /** The ID of the interconnect on which the connection will be provisioned. */
  interconnectId: string;
  /** The dedicated VLAN provisioned to the connection. */
  vlan: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocateConnectionOnInterconnectRequestSchema: Schema<AllocateConnectionOnInterconnectRequest> =
  s.object<AllocateConnectionOnInterconnectRequest>(
    {
      bandwidth: s.string(),
      connectionName: s.string(),
      ownerAccount: s.string(),
      interconnectId: s.string(),
      vlan: s.int(),
    },
    { additionalProperties: s.json() },
  );
