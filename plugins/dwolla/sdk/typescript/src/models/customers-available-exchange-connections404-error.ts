import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersAvailableExchangeConnections404Error = {
  code?: string;
  message?: string;
};

export const customersAvailableExchangeConnections404ErrorSchema: Schema<CustomersAvailableExchangeConnections404Error> =
  s.object<CustomersAvailableExchangeConnections404Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
