import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sipTransferModeSchema, type SipTransferMode } from "../sip-transfer-mode.js";

/** How to perform the SIP transfer, INVITE or REFER. */
export type SipTransferMode1Model = SipTransferMode;

export const sipTransferMode1ModelSchema: Schema<SipTransferMode1Model> = s.of<SipTransferMode1Model>(
  s.union([s.lazy(() => sipTransferModeSchema)]),
);
