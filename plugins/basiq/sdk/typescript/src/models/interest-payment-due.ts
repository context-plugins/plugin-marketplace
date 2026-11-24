import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When loan payments are due to be paid within each period. The investment benefit of earlier
 * payments affect the rate that can be offered.
 */
export const InterestPaymentDue = {
  InAdvance: "IN_ADVANCE",
  InArrears: "IN_ARREARS",
} as const;
export type InterestPaymentDue = (typeof InterestPaymentDue)[keyof typeof InterestPaymentDue] | (string & {});

export const interestPaymentDueSchema: EnumSchema<InterestPaymentDue> =
  s.enumOf<InterestPaymentDue>(InterestPaymentDue);
