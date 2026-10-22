import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessClassifications404Error = {
  code?: string;
  message?: string;
};

export const businessClassifications404ErrorSchema: Schema<BusinessClassifications404Error> =
  s.object<BusinessClassifications404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
