import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangesExchangeSessions400Error = {
  code?: string;
  message?: string;
};

export const exchangesExchangeSessions400ErrorSchema: Schema<ExchangesExchangeSessions400Error> =
  s.object<ExchangesExchangeSessions400Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
