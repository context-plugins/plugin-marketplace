import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReturnedManagedFee = {
  feeType?: string;
  feeId?: string;
};

export const returnedManagedFeeSchema: Schema<ReturnedManagedFee> = s.object<ReturnedManagedFee>({
  feeType: s.optional(s.string()),
  feeId: s.optional(s.string()),
});
