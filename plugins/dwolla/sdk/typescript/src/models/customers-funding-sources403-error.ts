import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersFundingSources403Error = {
  code?: string;
  message?: string;
};

export const customersFundingSources403ErrorSchema: Schema<CustomersFundingSources403Error> =
  s.object<CustomersFundingSources403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
