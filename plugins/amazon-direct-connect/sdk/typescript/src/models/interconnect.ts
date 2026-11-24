import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hasLogicalRedundancy1Schema, type HasLogicalRedundancy1 } from "./has-logical-redundancy1.js";
import { interconnectStateSchema, type InterconnectState } from "./interconnect-state.js";
import { macSecKeySchema, type MacSecKey } from "./mac-sec-key.js";
import { tagSchema, type Tag } from "./tag.js";

export type Interconnect = {
  /** The ID of the interconnect. */
  interconnectId?: string;
  /** The name of the interconnect. */
  interconnectName?: string;
  /**
   * The state of the interconnect. The following are the possible values: requested: The initial
   * state of an interconnect. The interconnect stays in the requested state until the Letter of
   * Authorization (LOA) is sent to the customer. pending: The interconnect is approved, and is
   * being initialized. available: The network link is up, and the interconnect is ready for use.
   * down: The network link is down. deleting: The interconnect is being deleted. deleted: The
   * interconnect is deleted. unknown: The state of the interconnect is not available.
   */
  interconnectState?: InterconnectState;
  /** The Amazon Web Services Region where the connection is located. */
  region?: string;
  /** The location of the connection. */
  location?: string;
  /** The bandwidth of the connection. */
  bandwidth?: string;
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
   * Indicates whether the interconnect supports a secondary BGP in the same address family
   * (IPv4/IPv6).
   */
  hasLogicalRedundancy?: HasLogicalRedundancy1;
  /** The tags associated with the interconnect. */
  tags?: Tag[];
  /** The name of the service provider associated with the interconnect. */
  providerName?: string;
  /** Indicates whether the interconnect supports MAC Security (MACsec). */
  macSecCapable?: boolean;
  /**
   * The MAC Security (MACsec) port link status. The valid values are Encryption Up, which means
   * that there is an active Connection Key Name, or Encryption Down.
   */
  portEncryptionStatus?: string;
  /**
   * The MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and
   * must_encrypt.
   */
  encryptionMode?: string;
  /** The MAC Security (MACsec) security keys. */
  macSecKeys?: MacSecKey[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const interconnectSchema: Schema<Interconnect> = s.object<Interconnect>(
  {
    interconnectId: s.optional(s.string()),
    interconnectName: s.optional(s.string()),
    interconnectState: s.optional(s.lazy(() => interconnectStateSchema)),
    region: s.optional(s.string()),
    location: s.optional(s.string()),
    bandwidth: s.optional(s.string()),
    loaIssueTime: s.optional(s.dateTime()),
    lagId: s.optional(s.string()),
    awsDevice: s.optional(s.string()),
    jumboFrameCapable: s.optional(s.boolean()),
    awsDeviceV2: s.optional(s.string()),
    awsLogicalDeviceId: s.optional(s.string()),
    hasLogicalRedundancy: s.optional(s.lazy(() => hasLogicalRedundancy1Schema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    providerName: s.optional(s.string()),
    macSecCapable: s.optional(s.boolean()),
    portEncryptionStatus: s.optional(s.string()),
    encryptionMode: s.optional(s.string()),
    macSecKeys: s.optional(s.array(s.lazy(() => macSecKeySchema))),
  },
  { additionalProperties: s.json() },
);
