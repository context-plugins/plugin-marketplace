import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangeSessions403Error = {
  code?: string;
  message?: string;
};

export const exchangeSessions403ErrorSchema: Schema<ExchangeSessions403Error> =
  s.object<ExchangeSessions403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
