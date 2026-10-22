import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information regarding the *contractor*. Only relevant for `voucher` issuers. */
export type Contractor = {
  id?: string;
  name?: string;
  contractId?: string;
};

export const contractorSchema: Schema<Contractor> = s.object<Contractor>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  contractId: s.optional(s.string()),
});
