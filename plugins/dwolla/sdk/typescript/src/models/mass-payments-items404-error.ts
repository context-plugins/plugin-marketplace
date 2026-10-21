import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPaymentsItems404Error = {
  code?: string;
  message?: string;
};

export const massPaymentsItems404ErrorSchema: Schema<MassPaymentsItems404Error> =
  s.object<MassPaymentsItems404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
