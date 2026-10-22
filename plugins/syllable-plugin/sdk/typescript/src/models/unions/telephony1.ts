import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { telephonyConfigurationsSchema, type TelephonyConfigurations } from "../telephony-configurations.js";

/** Telephony configurations to be applied to the targets under the channel */
export type Telephony1 = TelephonyConfigurations;

export const telephony1Schema: Schema<Telephony1> = s.of<Telephony1>(
  s.union([s.lazy(() => telephonyConfigurationsSchema)]),
);
