import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The transport protocol to use for the SIP endpoint. */
export const SipTransport = {
  Tls: "tls",
  Tcp: "tcp",
  Udp: "udp",
} as const;
export type SipTransport = (typeof SipTransport)[keyof typeof SipTransport] | (string & {});

export const sipTransportSchema: EnumSchema<SipTransport> = s.enumOf<SipTransport>(SipTransport);
