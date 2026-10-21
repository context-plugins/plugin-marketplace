import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { invalidExchangeTokenSchema, type InvalidExchangeToken } from "../invalid-exchange-token.js";
import { invalidExchangeSchema, type InvalidExchange } from "../invalid-exchange.js";

export type CustomersExchangesResponse = InvalidExchangeToken | InvalidExchange;

export const customersExchangesResponseSchema: Schema<CustomersExchangesResponse> =
  s.of<CustomersExchangesResponse>(
    s.union([s.lazy(() => invalidExchangeTokenSchema), s.lazy(() => invalidExchangeSchema)]),
  );
