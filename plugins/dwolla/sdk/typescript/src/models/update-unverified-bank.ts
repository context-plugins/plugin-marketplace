import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for updating information of an unverified bank funding source */
export type UpdateUnverifiedBank = {
  routingNumber?: string;
  accountNumber?: string;
  bankAccountType?: string;
  name: string;
};

export const updateUnverifiedBankSchema: Schema<UpdateUnverifiedBank> = s.object<UpdateUnverifiedBank>({
  routingNumber: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  bankAccountType: s.optional(s.string()),
  name: s.string(),
});
