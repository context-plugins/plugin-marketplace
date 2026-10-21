import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPayments403Error = {
  code?: string;
  message?: string;
};

export const massPayments403ErrorSchema: Schema<MassPayments403Error> = s.object<MassPayments403Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
