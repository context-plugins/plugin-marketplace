import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Immutable. The protocol used by this TargetServer. */
export const Protocol = {
  ProtocolUnspecified: "PROTOCOL_UNSPECIFIED",
  Http: "HTTP",
  Http2: "HTTP2",
  GrpcTarget: "GRPC_TARGET",
  Grpc: "GRPC",
  ExternalCallout: "EXTERNAL_CALLOUT",
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol] | (string & {});

export const protocolSchema: EnumSchema<Protocol> = s.enumOf<Protocol>(Protocol);
