import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Why the anomaly stopped being active. `reverted` means the cost returned inside the expected
 * normal range; `expired` means the anomaly was deactivated without the cost returning inside that
 * range; `unknown` means the reason could not be determined. Null while the anomaly is still
 * active.
 */
export const DeactivationReason = {
  Reverted: "reverted",
  Expired: "expired",
  Unknown: "unknown",
} as const;
export type DeactivationReason = (typeof DeactivationReason)[keyof typeof DeactivationReason] | (string & {});

export const deactivationReasonSchema: EnumSchema<DeactivationReason> =
  s.enumOf<DeactivationReason>(DeactivationReason);
