import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The protocol used by this target server. */
export const Protocol1 = {
  ProtocolUnspecified: "PROTOCOL_UNSPECIFIED",
  Http: "HTTP",
  Http2: "HTTP2",
  GrpcTarget: "GRPC_TARGET",
  Grpc: "GRPC",
  ExternalCallout: "EXTERNAL_CALLOUT",
} as const;
export type Protocol1 = (typeof Protocol1)[keyof typeof Protocol1] | (string & {});

export const protocol1Schema: EnumSchema<Protocol1> = s.enumOf<Protocol1>(Protocol1);
