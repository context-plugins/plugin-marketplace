import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sipEndpointSchema, type SipEndpoint } from "../sip-endpoint.js";

/** List of SIP endpoints to attempt for the transfer. */
export type SipEndpoints = SipEndpoint[];

export const sipEndpointsSchema: Schema<SipEndpoints> = s.of<SipEndpoints>(
  s.union([s.array(s.lazy(() => sipEndpointSchema))]),
);
