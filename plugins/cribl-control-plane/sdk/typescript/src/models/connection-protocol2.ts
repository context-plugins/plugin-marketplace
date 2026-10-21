import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connection protocol used for node-to-Leader communication. */
export const ConnectionProtocol2 = {
  Tcp: "tcp",
  Tls: "tls",
  Http2: "http2",
} as const;
export type ConnectionProtocol2 =
  | (typeof ConnectionProtocol2)[keyof typeof ConnectionProtocol2]
  | (string & {});

export const connectionProtocol2Schema: EnumSchema<ConnectionProtocol2> =
  s.enumOf<ConnectionProtocol2>(ConnectionProtocol2);
