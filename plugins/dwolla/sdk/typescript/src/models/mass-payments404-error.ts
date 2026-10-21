import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPayments404Error = {
  code?: string;
  message?: string;
};

export const massPayments404ErrorSchema: Schema<MassPayments404Error> = s.object<MassPayments404Error>({
  code: s.optional(s.string()),
  message: s.optional(s.string()),
});
