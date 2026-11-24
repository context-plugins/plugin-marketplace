import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingMode4Schema, type BillingMode4 } from "./billing-mode4.js";
import { connectionSchema, type Connection } from "./connection.js";
import { hasLogicalRedundancy2Schema, type HasLogicalRedundancy2 } from "./has-logical-redundancy2.js";
import { lagStateSchema, type LagState } from "./lag-state.js";
import { macSecKeySchema, type MacSecKey } from "./mac-sec-key.js";
import { rateLimiterStatusSchema, type RateLimiterStatus } from "./rate-limiter-status.js";
import { tagSchema, type Tag } from "./tag.js";

export type Lag = {
  /**
   * The individual bandwidth of the physical connections bundled by the LAG. The possible values
   * are 1Gbps, 10Gbps, 100Gbps, or 400 Gbps..
   */
  connectionsBandwidth?: string;
  /**
   * The number of physical dedicated connections initially provisioned and bundled by the LAG. You
   * can have a maximum of four connections when the port speed is 1 Gbps or 10 Gbps, or two when
   * the port speed is 100 Gbps or 400 Gbps.
   */
  numberOfConnections?: number;
  /** The ID of the LAG. */
  lagId?: string;
  /** The ID of the Amazon Web Services account that owns the LAG. */
  ownerAccount?: string;
  /** The name of the LAG. */
  lagName?: string;
  /**
   * The state of the LAG. The following are the possible values: requested: The initial state of a
   * LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.
   * pending: The LAG has been approved and is being initialized. available: The network link is
   * established and the LAG is ready for use. down: The network link is down. deleting: The LAG is
   * being deleted. deleted: The LAG is deleted. unknown: The state of the LAG is not available.
   */
  lagState?: LagState;
  /** The location of the LAG. */
  location?: string;
  /** The Amazon Web Services Region where the connection is located. */
  region?: string;
  /**
   * The minimum number of physical dedicated connections that must be operational for the LAG
   * itself to be operational.
   */
  minimumLinks?: number;
  /** The Direct Connect endpoint that hosts the LAG. */
  awsDevice?: string;
  /** The Direct Connect endpoint that hosts the LAG. */
  awsDeviceV2?: string;
  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be
   * different than the device that terminates the physical connection.
   */
  awsLogicalDeviceId?: string;
  /** The connections bundled by the LAG. */
  connections?: Connection[];
  /** Indicates whether the LAG can host other connections. */
  allowsHostedConnections?: boolean;
  /** Indicates whether jumbo frames are supported. */
  jumboFrameCapable?: boolean;
  /**
   * Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).
   */
  hasLogicalRedundancy?: HasLogicalRedundancy2;
  /** The tags associated with the LAG. */
  tags?: Tag[];
  /** The name of the service provider associated with the LAG. */
  providerName?: string;
  /** Indicates whether the LAG supports MAC Security (MACsec). */
  macSecCapable?: boolean;
  /**
   * The LAG MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt,
   * and must_encrypt.
   */
  encryptionMode?: string;
  /** The MAC Security (MACsec) security keys associated with the LAG. */
  macSecKeys?: MacSecKey[];
  /**
   * The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces
   * on the LAG. Not applicable to LAGs that are interconnects and support hosted connections.
   */
  prefixPoolSizeIpv4?: number;
  /**
   * The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces
   * on the LAG. Not applicable to LAGs that are interconnects and support hosted connections.
   */
  prefixPoolSizeIpv6?: number;
  /**
   * The number of inbound IPv4 route prefixes in the LAG prefix pool not yet allocated to a virtual
   * interface. Not applicable to LAGs that are interconnects and support hosted connections.
   */
  prefixPoolUnallocatedCountIpv4?: number;
  /**
   * The number of inbound IPv6 route prefixes in the LAG prefix pool not yet allocated to a virtual
   * interface. Not applicable to LAGs that are interconnects and support hosted connections.
   */
  prefixPoolUnallocatedCountIpv6?: number;
  rateLimiterStatus?: RateLimiterStatus;
  /** The billing mode of the LAG. */
  billingMode?: BillingMode4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lagSchema: Schema<Lag> = s.object<Lag>(
  {
    connectionsBandwidth: s.optional(s.string()),
    numberOfConnections: s.optional(s.int()),
    lagId: s.optional(s.string()),
    ownerAccount: s.optional(s.string()),
    lagName: s.optional(s.string()),
    lagState: s.optional(s.lazy(() => lagStateSchema)),
    location: s.optional(s.string()),
    region: s.optional(s.string()),
    minimumLinks: s.optional(s.int()),
    awsDevice: s.optional(s.string()),
    awsDeviceV2: s.optional(s.string()),
    awsLogicalDeviceId: s.optional(s.string()),
    connections: s.optional(s.array(s.lazy(() => connectionSchema))),
    allowsHostedConnections: s.optional(s.boolean()),
    jumboFrameCapable: s.optional(s.boolean()),
    hasLogicalRedundancy: s.optional(s.lazy(() => hasLogicalRedundancy2Schema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    providerName: s.optional(s.string()),
    macSecCapable: s.optional(s.boolean()),
    encryptionMode: s.optional(s.string()),
    macSecKeys: s.optional(s.array(s.lazy(() => macSecKeySchema))),
    prefixPoolSizeIpv4: s.optional(s.int()),
    prefixPoolSizeIpv6: s.optional(s.int()),
    prefixPoolUnallocatedCountIpv4: s.optional(s.int()),
    prefixPoolUnallocatedCountIpv6: s.optional(s.int()),
    rateLimiterStatus: s.optional(s.lazy(() => rateLimiterStatusSchema)),
    billingMode: s.optional(s.lazy(() => billingMode4Schema)),
  },
  { additionalProperties: s.json() },
);
