import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagedFee = {
  feeType?: string;
  feeId?: string;
};

export const managedFeeSchema: Schema<ManagedFee> = s.object<ManagedFee>({
  feeType: s.optional(s.string()),
  feeId: s.optional(s.string()),
});
