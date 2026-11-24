import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressFamilySchema, type AddressFamily } from "./address-family.js";

export type NewBgpPeer = {
  /**
   * The autonomous system number (ASN). The valid range is from 1 to 2147483646 for Border Gateway
   * Protocol (BGP) configuration. If you provide a number greater than the maximum, an error is
   * returned. Use asnLong instead.
   */
  asn?: number;
  /** The long ASN for a new BGP peer. The valid range is from 1 to 4294967294. */
  asnLong?: number;
  /**
   * The authentication key for BGP configuration. This string has a minimum length of 6 characters
   * and and a maximun lenth of 80 characters.
   */
  authKey?: string;
  /** The address family for the BGP peer. */
  addressFamily?: AddressFamily;
  /** The IP address assigned to the Amazon interface. */
  amazonAddress?: string;
  /** The IP address assigned to the customer interface. */
  customerAddress?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newBgpPeerSchema: Schema<NewBgpPeer> = s.object<NewBgpPeer>(
  {
    asn: s.optional(s.int()),
    asnLong: s.optional(s.int()),
    authKey: s.optional(s.string()),
    addressFamily: s.optional(s.lazy(() => addressFamilySchema)),
    amazonAddress: s.optional(s.string()),
    customerAddress: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
