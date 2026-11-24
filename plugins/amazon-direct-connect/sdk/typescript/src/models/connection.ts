import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingMode1Schema, type BillingMode1 } from "./billing-mode1.js";
import { connectionStateSchema, type ConnectionState } from "./connection-state.js";
import { hasLogicalRedundancySchema, type HasLogicalRedundancy } from "./has-logical-redundancy.js";
import { macSecKeySchema, type MacSecKey } from "./mac-sec-key.js";
import { rateLimiterStatusSchema, type RateLimiterStatus } from "./rate-limiter-status.js";
import { tagSchema, type Tag } from "./tag.js";

export type Connection = {
  /** The ID of the Amazon Web Services account that owns the connection. */
  ownerAccount?: string;
  /** The ID of the connection. */
  connectionId?: string;
  /** The name of the connection. */
  connectionName?: string;
  /**
   * The state of the connection. The following are the possible values: ordering: The initial state
   * of a hosted connection provisioned on an interconnect. The connection stays in the ordering
   * state until the owner of the hosted connection confirms or declines the connection order.
   * requested: The initial state of a standard connection. The connection stays in the requested
   * state until the Letter of Authorization (LOA) is sent to the customer. pending: The connection
   * has been approved and is being initialized. available: The network link is up and the
   * connection is ready for use. down: The network l
   */
  connectionState?: ConnectionState;
  /** The Amazon Web Services Region where the connection is located. */
  region?: string;
  /** The location of the connection. */
  location?: string;
  /** The bandwidth of the connection. */
  bandwidth?: string;
  /** The ID of the VLAN. */
  vlan?: number;
  /** The name of the Direct Connect service provider associated with the connection. */
  partnerName?: string;
  /** The time of the most recent call to DescribeLoa for this connection. */
  loaIssueTime?: Date;
  /** The ID of the LAG. */
  lagId?: string;
  /** The Direct Connect endpoint on which the physical connection terminates. */
  awsDevice?: string;
  /** Indicates whether jumbo frames are supported. */
  jumboFrameCapable?: boolean;
  /** The Direct Connect endpoint that terminates the physical connection. */
  awsDeviceV2?: string;
  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be
   * different than the device that terminates the physical connection.
   */
  awsLogicalDeviceId?: string;
  /**
   * Indicates whether the connection supports a secondary BGP peer in the same address family
   * (IPv4/IPv6).
   */
  hasLogicalRedundancy?: HasLogicalRedundancy;
  /** The tags associated with the connection. */
  tags?: Tag[];
  /** The name of the service provider associated with the connection. */
  providerName?: string;
  /** Indicates whether the connection supports MAC Security (MACsec). */
  macSecCapable?: boolean;
  /**
   * The MAC Security (MACsec) port link status of the connection. The valid values are Encryption
   * Up, which means that there is an active Connection Key Name, or Encryption Down.
   */
  portEncryptionStatus?: string;
  /**
   * The MAC Security (MACsec) connection encryption mode. The valid values are no_encrypt,
   * should_encrypt, and must_encrypt.
   */
  encryptionMode?: string;
  /** The MAC Security (MACsec) security keys associated with the connection. */
  macSecKeys?: MacSecKey[];
  rateLimiterStatus?: RateLimiterStatus;
  /** Indicates whether the interconnect hosting this connection supports MAC Security (MACsec). */
  partnerInterconnectMacSecCapable?: boolean;
  /**
   * The total number of inbound IPv4 route prefixes you can allocate across the virtual interfaces
   * on the connection. Not applicable to hosted connections or interconnects.
   */
  prefixPoolSizeIpv4?: number;
  /**
   * The total number of inbound IPv6 route prefixes you can allocate across the virtual interfaces
   * on the connection. Not applicable to hosted connections or interconnects.
   */
  prefixPoolSizeIpv6?: number;
  /**
   * The number of inbound IPv4 route prefixes in the connection prefix pool not yet allocated to a
   * virtual interface. Not applicable to hosted connections or interconnects.
   */
  prefixPoolUnallocatedCountIpv4?: number;
  /**
   * The number of inbound IPv6 route prefixes in the connection prefix pool not yet allocated to a
   * virtual interface. Not applicable to hosted connections or interconnects.
   */
  prefixPoolUnallocatedCountIpv6?: number;
  /** The billing mode of the connection. */
  billingMode?: BillingMode1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionSchema: Schema<Connection> = s.object<Connection>(
  {
    ownerAccount: s.optional(s.string()),
    connectionId: s.optional(s.string()),
    connectionName: s.optional(s.string()),
    connectionState: s.optional(s.lazy(() => connectionStateSchema)),
    region: s.optional(s.string()),
    location: s.optional(s.string()),
    bandwidth: s.optional(s.string()),
    vlan: s.optional(s.int()),
    partnerName: s.optional(s.string()),
    loaIssueTime: s.optional(s.dateTime()),
    lagId: s.optional(s.string()),
    awsDevice: s.optional(s.string()),
    jumboFrameCapable: s.optional(s.boolean()),
    awsDeviceV2: s.optional(s.string()),
    awsLogicalDeviceId: s.optional(s.string()),
    hasLogicalRedundancy: s.optional(s.lazy(() => hasLogicalRedundancySchema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    providerName: s.optional(s.string()),
    macSecCapable: s.optional(s.boolean()),
    portEncryptionStatus: s.optional(s.string()),
    encryptionMode: s.optional(s.string()),
    macSecKeys: s.optional(s.array(s.lazy(() => macSecKeySchema))),
    rateLimiterStatus: s.optional(s.lazy(() => rateLimiterStatusSchema)),
    partnerInterconnectMacSecCapable: s.optional(s.boolean()),
    prefixPoolSizeIpv4: s.optional(s.int()),
    prefixPoolSizeIpv6: s.optional(s.int()),
    prefixPoolUnallocatedCountIpv4: s.optional(s.int()),
    prefixPoolUnallocatedCountIpv6: s.optional(s.int()),
    billingMode: s.optional(s.lazy(() => billingMode1Schema)),
  },
  { additionalProperties: s.json() },
);
