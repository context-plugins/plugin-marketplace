import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** SIP transfer mode. */
export type SipTransferMode1 = string;

export const sipTransferMode1Schema: Schema<SipTransferMode1> = s.of<SipTransferMode1>(s.union([s.string()]));
