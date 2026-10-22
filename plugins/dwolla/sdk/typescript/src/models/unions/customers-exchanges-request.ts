import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createFinicitySecureExchangeSchema,
  type CreateFinicitySecureExchange,
} from "../create-finicity-secure-exchange.js";
import {
  createMxOpenBankingExchangeSchema,
  type CreateMxOpenBankingExchange,
} from "../create-mx-open-banking-exchange.js";
import {
  createPlaidOpenBankingExchangeSchema,
  type CreatePlaidOpenBankingExchange,
} from "../create-plaid-open-banking-exchange.js";
import {
  createTokenBasedExchangeSchema,
  type CreateTokenBasedExchange,
} from "../create-token-based-exchange.js";

export type CustomersExchangesRequest =
  | CreateFinicitySecureExchange
  | CreateTokenBasedExchange
  | CreateMxOpenBankingExchange
  | CreatePlaidOpenBankingExchange;

export const customersExchangesRequestSchema: Schema<CustomersExchangesRequest> =
  s.of<CustomersExchangesRequest>(
    s.union([
      s.lazy(() => createFinicitySecureExchangeSchema),
      s.lazy(() => createTokenBasedExchangeSchema),
      s.lazy(() => createMxOpenBankingExchangeSchema),
      s.lazy(() => createPlaidOpenBankingExchangeSchema),
    ]),
  );
