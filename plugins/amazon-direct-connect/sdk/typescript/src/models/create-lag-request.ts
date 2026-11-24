import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingMode3Schema, type BillingMode3 } from "./billing-mode3.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateLagRequest = {
  /**
   * The number of physical dedicated connections initially provisioned and bundled by the LAG. You
   * can have a maximum of four connections when the port speed is 1Gbps or 10Gbps, or two when the
   * port speed is 100Gbps or 400Gbps.
   */
  numberOfConnections: number;
  /** The location for the LAG. */
  location: string;
  /**
   * The bandwidth of the individual physical dedicated connections bundled by the LAG. The possible
   * values are 1Gbps,10Gbps, 100Gbps, and 400Gbps.
   */
  connectionsBandwidth: string;
  /** The name of the LAG. */
  lagName: string;
  /** The ID of an existing dedicated connection to migrate to the LAG. */
  connectionId?: string;
  /** The tags to associate with the LAG. */
  tags?: Tag[];
  /** The tags to associate with the automtically created LAGs. */
  childConnectionTags?: Tag[];
  /** The name of the service provider associated with the LAG. */
  providerName?: string;
  /**
   * Indicates whether the connection will support MAC Security (MACsec). All connections in the LAG
   * must be capable of supporting MAC Security (MACsec). For information about MAC Security
   * (MACsec) prerequisties, see MACsec prerequisties in the Direct Connect User Guide.
   */
  requestMacSec?: boolean;
  /** The billing mode for the LAG. */
  billingMode?: BillingMode3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createLagRequestSchema: Schema<CreateLagRequest> = s.object<CreateLagRequest>(
  {
    numberOfConnections: s.int(),
    location: s.string(),
    connectionsBandwidth: s.string(),
    lagName: s.string(),
    connectionId: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    childConnectionTags: s.optional(s.array(s.lazy(() => tagSchema))),
    providerName: s.optional(s.string()),
    requestMacSec: s.optional(s.boolean()),
    billingMode: s.optional(s.lazy(() => billingMode3Schema)),
    _keysMap: {
      requestMacSec: "requestMACSec",
    },
  },
  { additionalProperties: s.json() },
);
