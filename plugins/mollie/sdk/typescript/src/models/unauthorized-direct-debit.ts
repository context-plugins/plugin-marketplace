import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnauthorizedDirectDebit = {
  paymentId?: string;
  paymentDescription?: string;
};

export const unauthorizedDirectDebitSchema: Schema<UnauthorizedDirectDebit> =
  s.object<UnauthorizedDirectDebit>({
    paymentId: s.optional(s.string()),
    paymentDescription: s.optional(s.string()),
  });
