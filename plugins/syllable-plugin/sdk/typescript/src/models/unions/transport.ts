import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sipTransportSchema, type SipTransport } from "../sip-transport.js";

/** SIP transport protocol, e.g. `tcp`, `tls` or `udp`. */
export type Transport = SipTransport;

export const transportSchema: Schema<Transport> = s.of<Transport>(
  s.union([s.lazy(() => sipTransportSchema)]),
);
