import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sipConfigurationSchema, type SipConfiguration } from "../sip-configuration.js";

/** SIP routing configuration applied when transferring calls on this channel */
export type SipConfiguration1 = SipConfiguration;

export const sipConfiguration1Schema: Schema<SipConfiguration1> = s.of<SipConfiguration1>(
  s.union([s.lazy(() => sipConfigurationSchema)]),
);
