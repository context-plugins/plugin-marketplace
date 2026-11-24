import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NetworkInterface = {
  /** The Internet Protocol version 4 (IPv4) address of the interface. */
  ipv4Address?: string;
  /**
   * The Media Access Control (MAC) address of the interface. This is currently unsupported and will
   * not be returned in output.
   */
  macAddress?: string;
  /**
   * The Internet Protocol version 6 (IPv6) address of the interface. This element returns IPv6
   * addresses for all gateway types except FSx File Gateway.
   */
  ipv6Address?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkInterfaceSchema: Schema<NetworkInterface> = s.object<NetworkInterface>(
  {
    ipv4Address: s.optional(s.string()),
    macAddress: s.optional(s.string()),
    ipv6Address: s.optional(s.string()),
    _keysMap: {
      ipv4Address: "Ipv4Address",
      macAddress: "MacAddress",
      ipv6Address: "Ipv6Address",
    },
  },
  { additionalProperties: s.json() },
);
