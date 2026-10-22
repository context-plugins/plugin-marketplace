import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPaymentItems403Error = {
  code?: string;
  message?: string;
};

export const massPaymentItems403ErrorSchema: Schema<MassPaymentItems403Error> =
  s.object<MassPaymentItems403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
