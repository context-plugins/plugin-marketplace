import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the network protocol of the agent. When not specified, the default value of
 * NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.
 */
export const Protocol = {
  NetworkProtocolUnspecified: "NETWORK_PROTOCOL_UNSPECIFIED",
  NetworkProtocolHttps: "NETWORK_PROTOCOL_HTTPS",
  NetworkProtocolHttp: "NETWORK_PROTOCOL_HTTP",
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol] | (string & {});

export const protocolSchema: EnumSchema<Protocol> = s.enumOf<Protocol>(Protocol);
