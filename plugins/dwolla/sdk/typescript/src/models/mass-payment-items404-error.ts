import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPaymentItems404Error = {
  code?: string;
  message?: string;
};

export const massPaymentItems404ErrorSchema: Schema<MassPaymentItems404Error> =
  s.object<MassPaymentItems404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
