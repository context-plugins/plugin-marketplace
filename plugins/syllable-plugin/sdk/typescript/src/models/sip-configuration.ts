import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callInfoPlacementSchema, type CallInfoPlacement } from "./unions/call-info-placement.js";
import { sipEndpointsSchema, type SipEndpoints } from "./unions/sip-endpoints.js";
import {
  sipTransferMode1ModelSchema,
  type SipTransferMode1Model,
} from "./unions/sip-transfer-mode1-model.js";

/**
 * SIP routing configuration for transferring a call to a destination.
 *
 * This is internal telephony/routing configuration used to direct a transfer to specific SIP
 * endpoints.
 */
export type SipConfiguration = {
  /** How to perform the SIP transfer, INVITE or REFER. */
  sipTransferMode?: SipTransferMode1Model;
  /** List of SIP endpoints to attempt for the transfer. */
  sipEndpoints?: SipEndpoints;
  /**
   * Where to place call information during a transfer. Supported values are `uri_parameters`,
   * `to_parameters`, `from_parameters`, or `sip_header:<header-name>`.
   */
  callInfoPlacement?: CallInfoPlacement;
};

export const sipConfigurationSchema: Schema<SipConfiguration> = s.object<SipConfiguration>({
  sipTransferMode: s.optional(s.lazy(() => sipTransferMode1ModelSchema)),
  sipEndpoints: s.optional(s.lazy(() => sipEndpointsSchema)),
  callInfoPlacement: s.optional(s.lazy(() => callInfoPlacementSchema)),
  _keysMap: {
    sipTransferMode: "sip_transfer_mode",
    sipEndpoints: "sip_endpoints",
    callInfoPlacement: "call_info_placement",
  },
});
