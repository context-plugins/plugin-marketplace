import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsFundingSources404Error = {
  code?: string;
  message?: string;
};

export const accountsFundingSources404ErrorSchema: Schema<AccountsFundingSources404Error> =
  s.object<AccountsFundingSources404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
