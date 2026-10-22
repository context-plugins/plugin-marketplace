import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersFundingSources404Error = {
  code?: string;
  message?: string;
};

export const customersFundingSources404ErrorSchema: Schema<CustomersFundingSources404Error> =
  s.object<CustomersFundingSources404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
