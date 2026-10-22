import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPaymentsItems403Error = {
  code?: string;
  message?: string;
};

export const massPaymentsItems403ErrorSchema: Schema<MassPaymentsItems403Error> =
  s.object<MassPaymentsItems403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
