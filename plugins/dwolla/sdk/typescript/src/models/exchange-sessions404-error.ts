import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangeSessions404Error = {
  code?: string;
  message?: string;
};

export const exchangeSessions404ErrorSchema: Schema<ExchangeSessions404Error> =
  s.object<ExchangeSessions404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
