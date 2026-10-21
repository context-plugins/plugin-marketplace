import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Platform Fee in the transaction currency's smallest unit. Sent as Ryft's `platformFee` field. */
export type PlatformFee = number;

export const platformFeeSchema: Schema<PlatformFee> = s.of<PlatformFee>(s.union([s.int()]));
