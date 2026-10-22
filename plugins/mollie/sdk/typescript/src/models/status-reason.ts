import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * This object offers details about the status of a payment. Currently it is only available for
 * point-of-sale payments.
 *
 * You can find more information about the possible values of this object on [this
 * page](status-reasons).**
 */
export type StatusReason = {
  code: string;
  /** A description of the status reason, localized according to the payment `locale`. */
  message: string;
};

export const statusReasonSchema: Schema<StatusReason> = s.object<StatusReason>({
  code: s.string(),
  message: s.string(),
});
