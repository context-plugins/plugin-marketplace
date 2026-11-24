import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressFamilySchema, type AddressFamily } from "./address-family.js";
import { bgpPeerSchema, type BgpPeer } from "./bgp-peer.js";
import { routeFilterPrefixSchema, type RouteFilterPrefix } from "./route-filter-prefix.js";
import { tagSchema, type Tag } from "./tag.js";
import { virtualInterfaceStateSchema, type VirtualInterfaceState } from "./virtual-interface-state.js";

export type VirtualInterface = {
  /** The ID of the Amazon Web Services account that owns the virtual interface. */
  ownerAccount?: string;
  /** The ID of the virtual interface. */
  virtualInterfaceId?: string;
  /** The location of the connection. */
  location?: string;
  /** The ID of the connection. */
  connectionId?: string;
  /** The type of virtual interface. The possible values are private, public and transit. */
  virtualInterfaceType?: string;
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of
   * 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   */
  virtualInterfaceName?: string;
  /** The ID of the VLAN. */
  vlan?: number;
  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway
   * Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is
   * returned. Use asnLong instead. You can use asnLong or asn, but not both. We recommend using
   * asnLong as it supports a greater pool of numbers. If you provide a value in the same API call
   * for both asn and asnLong, the API will only accept the value for asnLong. If you enter a 4-byte
   * ASN for the asn parameter, the API returns an error. If you are using a 2-byte ASN, the API
   * response will include the 2-byte value
   */
  asn?: number;
  /**
   * The long ASN for the virtual interface. The valid range is from 1 to 4294967294 for BGP
   * configuration. Note the following limitations when using asnLong: You can use asnLong or asn,
   * but not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong
   * accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong,
   * the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the
   * maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will
   * include the 2-byte value for both the asn and
   */
  asnLong?: number;
  /** The autonomous system number (AS) for the Amazon side of the connection. */
  amazonSideAsn?: number;
  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters
   * and and a maximun lenth of 80 characters.
   */
  authKey?: string;
  /** The IP address assigned to the Amazon interface. */
  amazonAddress?: string;
  /** The IP address assigned to the customer interface. */
  customerAddress?: string;
  /** The address family for the BGP peer. */
  addressFamily?: AddressFamily;
  /**
   * The state of the virtual interface. The following are the possible values: confirming: The
   * creation of the virtual interface is pending confirmation from the virtual interface owner. If
   * the owner of the virtual interface is different from the owner of the connection on which it is
   * provisioned, then the virtual interface will remain in this state until it is confirmed by the
   * virtual interface owner. verifying: This state only applies to public virtual interfaces. Each
   * public virtual interface needs validation before the virtual interface can be created. pending:
   * A virtual interface is in this s
   */
  virtualInterfaceState?: VirtualInterfaceState;
  /** The customer router configuration. */
  customerRouterConfig?: string;
  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The
   * default value is 1500
   */
  mtu?: number;
  /** Indicates whether jumbo frames are supported. */
  jumboFrameCapable?: boolean;
  /** The ID of the virtual private gateway. Applies only to private virtual interfaces. */
  virtualGatewayId?: string;
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /**
   * The routes to be advertised to the Amazon Web Services network in this Region. Applies to
   * public virtual interfaces.
   */
  routeFilterPrefixes?: RouteFilterPrefix[];
  /** The BGP peers configured on this virtual interface. */
  bgpPeers?: BgpPeer[];
  /** The Amazon Web Services Region where the virtual interface is located. */
  region?: string;
  /** The Direct Connect endpoint that terminates the physical connection. */
  awsDeviceV2?: string;
  /**
   * The Direct Connect endpoint that terminates the logical connection. This device might be
   * different than the device that terminates the physical connection.
   */
  awsLogicalDeviceId?: string;
  /** The tags associated with the virtual interface. */
  tags?: Tag[];
  /** Indicates whether SiteLink is enabled. */
  siteLinkEnabled?: boolean;
  /**
   * The number of inbound IPv4 route prefixes allocated to the virtual interface. Not applicable to
   * public virtual interfaces.
   */
  prefixPoolAllocatedCountIpv4?: number;
  /**
   * The number of inbound IPv6 route prefixes allocated to the virtual interface. Not applicable to
   * public virtual interfaces.
   */
  prefixPoolAllocatedCountIpv6?: number;
  /**
   * The rate limit (bandwidth allocation) applied to the virtual interface. The value must be one
   * of the supported bandwidth values and cannot exceed the bandwidth of the parent connection or
   * LAG. Supported values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 600Mbps, 700Mbps,
   * 800Mbps, 900Mbps, 1Gbps, 1.2Gbps, 1.5Gbps, 1.8Gbps, 2Gbps, 2.1Gbps, 2.4Gbps, 2.7Gbps, 3Gbps,
   * 3.2Gbps, 3.6Gbps, 4Gbps, 5Gbps, 6Gbps, 7Gbps, 8Gbps, 9Gbps, 10Gbps, 12Gbps, 15Gbps, 18Gbps,
   * 20Gbps, 21Gbps, 24Gbps, 27Gbps, 30Gbps, 32Gbps, 36Gbps, 40Gbps, 50Gbps, 60Gbps, 70Gbps, 80Gbps,
   * 100Gbps, 120Gbps, 150Gbps, 180Gbps, 2
   */
  rateLimit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualInterfaceSchema: Schema<VirtualInterface> = s.object<VirtualInterface>(
  {
    ownerAccount: s.optional(s.string()),
    virtualInterfaceId: s.optional(s.string()),
    location: s.optional(s.string()),
    connectionId: s.optional(s.string()),
    virtualInterfaceType: s.optional(s.string()),
    virtualInterfaceName: s.optional(s.string()),
    vlan: s.optional(s.int()),
    asn: s.optional(s.int()),
    asnLong: s.optional(s.int()),
    amazonSideAsn: s.optional(s.int()),
    authKey: s.optional(s.string()),
    amazonAddress: s.optional(s.string()),
    customerAddress: s.optional(s.string()),
    addressFamily: s.optional(s.lazy(() => addressFamilySchema)),
    virtualInterfaceState: s.optional(s.lazy(() => virtualInterfaceStateSchema)),
    customerRouterConfig: s.optional(s.string()),
    mtu: s.optional(s.int()),
    jumboFrameCapable: s.optional(s.boolean()),
    virtualGatewayId: s.optional(s.string()),
    directConnectGatewayId: s.optional(s.string()),
    routeFilterPrefixes: s.optional(s.array(s.lazy(() => routeFilterPrefixSchema))),
    bgpPeers: s.optional(s.array(s.lazy(() => bgpPeerSchema))),
    region: s.optional(s.string()),
    awsDeviceV2: s.optional(s.string()),
    awsLogicalDeviceId: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    siteLinkEnabled: s.optional(s.boolean()),
    prefixPoolAllocatedCountIpv4: s.optional(s.int()),
    prefixPoolAllocatedCountIpv6: s.optional(s.int()),
    rateLimit: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
