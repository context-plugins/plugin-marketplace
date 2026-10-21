import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangesExchangeSessions403Error = {
  code?: string;
  message?: string;
};

export const exchangesExchangeSessions403ErrorSchema: Schema<ExchangesExchangeSessions403Error> =
  s.object<ExchangesExchangeSessions403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
