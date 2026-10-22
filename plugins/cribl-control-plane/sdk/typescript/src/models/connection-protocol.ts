import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConnectionProtocol = {
  Tcp: "tcp",
  Tls: "tls",
  Http2: "http2",
} as const;
export type ConnectionProtocol = (typeof ConnectionProtocol)[keyof typeof ConnectionProtocol] | (string & {});

export const connectionProtocolSchema: EnumSchema<ConnectionProtocol> =
  s.enumOf<ConnectionProtocol>(ConnectionProtocol);
