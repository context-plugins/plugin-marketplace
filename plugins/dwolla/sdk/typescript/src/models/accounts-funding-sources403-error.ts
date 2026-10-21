import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountsFundingSources403Error = {
  code?: string;
  message?: string;
};

export const accountsFundingSources403ErrorSchema: Schema<AccountsFundingSources403Error> =
  s.object<AccountsFundingSources403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
