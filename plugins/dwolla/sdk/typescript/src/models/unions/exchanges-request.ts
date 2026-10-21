import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createFinicitySecureExchangeSchema,
  type CreateFinicitySecureExchange,
} from "../create-finicity-secure-exchange.js";
import {
  createTokenBasedExchangeSchema,
  type CreateTokenBasedExchange,
} from "../create-token-based-exchange.js";

export type ExchangesRequest = CreateFinicitySecureExchange | CreateTokenBasedExchange;

export const exchangesRequestSchema: Schema<ExchangesRequest> = s.of<ExchangesRequest>(
  s.union([s.lazy(() => createFinicitySecureExchangeSchema), s.lazy(() => createTokenBasedExchangeSchema)]),
);
