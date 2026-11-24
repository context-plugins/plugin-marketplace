import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressFamilySchema, type AddressFamily } from "./address-family.js";
import { tagSchema, type Tag } from "./tag.js";

export type NewPrivateVirtualInterface = {
  /**
   * The name of the virtual interface assigned by the customer network. The name has a maximum of
   * 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
   */
  virtualInterfaceName: string;
  /** The ID of the VLAN. */
  vlan: number;
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
   * The long ASN for a new private virtual interface. The valid range is from 1 to 4294967294 for
   * BGP configuration. Note the following limitations when using asnLong: You can use asnLong or
   * asn, but not both. We recommend using asnLong as it supports a greater pool of numbers. asnLong
   * accepts any valid ASN value, regardless if it's 2-byte or 4-byte. When using a 4-byte asnLong,
   * the API response returns 0 for the legacy asn attribute since 4-byte ASN values exceed the
   * maximum supported value of 2,147,483,647. If you are using a 2-byte ASN, the API response will
   * include the 2-byte value for both th
   */
  asnLong?: number;
  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The
   * default value is 1500.
   */
  mtu?: number;
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
  /** The ID of the virtual private gateway. */
  virtualGatewayId?: string;
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The tags associated with the private virtual interface. */
  tags?: Tag[];
  /** Indicates whether to enable or disable SiteLink. */
  enableSiteLink?: boolean;
  /** The number of inbound IPv4 route prefixes to allocate to the virtual interface. */
  prefixPoolAllocatedCountIpv4?: number;
  /** The number of inbound IPv6 route prefixes to allocate to the virtual interface. */
  prefixPoolAllocatedCountIpv6?: number;
  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. The rate limit
   * restricts the maximum bandwidth that the virtual interface can use on the parent connection.
   */
  rateLimit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newPrivateVirtualInterfaceSchema: Schema<NewPrivateVirtualInterface> =
  s.object<NewPrivateVirtualInterface>(
    {
      virtualInterfaceName: s.string(),
      vlan: s.int(),
      asn: s.optional(s.int()),
      asnLong: s.optional(s.int()),
      mtu: s.optional(s.int()),
      authKey: s.optional(s.string()),
      amazonAddress: s.optional(s.string()),
      customerAddress: s.optional(s.string()),
      addressFamily: s.optional(s.lazy(() => addressFamilySchema)),
      virtualGatewayId: s.optional(s.string()),
      directConnectGatewayId: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      enableSiteLink: s.optional(s.boolean()),
      prefixPoolAllocatedCountIpv4: s.optional(s.int()),
      prefixPoolAllocatedCountIpv6: s.optional(s.int()),
      rateLimit: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
