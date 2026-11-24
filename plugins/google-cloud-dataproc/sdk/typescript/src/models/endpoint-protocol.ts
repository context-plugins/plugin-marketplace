import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The protocol to use for the metastore service endpoint. If unspecified, defaults to
 * THRIFT.
 */
export const EndpointProtocol = {
  EndpointProtocolUnspecified: "ENDPOINT_PROTOCOL_UNSPECIFIED",
  Thrift: "THRIFT",
  Grpc: "GRPC",
} as const;
export type EndpointProtocol = (typeof EndpointProtocol)[keyof typeof EndpointProtocol] | (string & {});

export const endpointProtocolSchema: EnumSchema<EndpointProtocol> =
  s.enumOf<EndpointProtocol>(EndpointProtocol);
