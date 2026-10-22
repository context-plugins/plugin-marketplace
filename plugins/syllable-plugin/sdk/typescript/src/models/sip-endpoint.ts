import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { portSchema, type Port } from "./unions/port.js";
import { transportSchema, type Transport } from "./unions/transport.js";

/** A single SIP endpoint to attempt for a transfer. */
export type SipEndpoint = {
  /** SIP endpoint host (IP address or hostname). */
  host: string;
  /** SIP endpoint port. */
  port?: Port;
  /** SIP transport protocol, e.g. `tcp`, `tls` or `udp`. */
  transport?: Transport;
};

export const sipEndpointSchema: Schema<SipEndpoint> = s.object<SipEndpoint>({
  host: s.string(),
  port: s.optional(s.lazy(() => portSchema)),
  transport: s.optional(s.lazy(() => transportSchema)),
});
