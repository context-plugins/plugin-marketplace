import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type AllocateHostedConnectionRequest = {
  /** The ID of the interconnect or LAG. */
  connectionId: string;
  /** The ID of the Amazon Web Services account ID of the customer for the connection. */
  ownerAccount: string;
  /**
   * The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps,
   * 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps, and 25Gbps. Note that only those Direct Connect
   * Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps,
   * 10Gbps, or 25Gbps hosted connection.
   */
  bandwidth: string;
  /** The name of the hosted connection. */
  connectionName: string;
  /** The dedicated VLAN provisioned to the hosted connection. */
  vlan: number;
  /** The tags associated with the connection. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocateHostedConnectionRequestSchema: Schema<AllocateHostedConnectionRequest> =
  s.object<AllocateHostedConnectionRequest>(
    {
      connectionId: s.string(),
      ownerAccount: s.string(),
      bandwidth: s.string(),
      connectionName: s.string(),
      vlan: s.int(),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
    },
    { additionalProperties: s.json() },
  );
