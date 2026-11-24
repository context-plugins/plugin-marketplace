import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EgressTransport = {
  Udp: "udp",
  Tcp: "tcp",
  Tls: "tls",
} as const;
export type EgressTransport = (typeof EgressTransport)[keyof typeof EgressTransport] | (string & {});

export const egressTransportSchema: EnumSchema<EgressTransport> = s.enumOf<EgressTransport>(EgressTransport);
