import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { telephonyConfigurationsSchema, type TelephonyConfigurations } from "../telephony-configurations.js";

/**
 * Telephony configurations to be applied to targets belonging to the channel. Only applies to voice
 * supported channels.
 */
export type Telephony = TelephonyConfigurations;

export const telephonySchema: Schema<Telephony> = s.of<Telephony>(
  s.union([s.lazy(() => telephonyConfigurationsSchema)]),
);
