import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createCustomerBankFundingSourceWithAccountNumbersSchema,
  type CreateCustomerBankFundingSourceWithAccountNumbers,
} from "../create-customer-bank-funding-source-with-account-numbers.js";
import {
  createCustomerBankFundingSourceWithPlaidSchema,
  type CreateCustomerBankFundingSourceWithPlaid,
} from "../create-customer-bank-funding-source-with-plaid.js";
import {
  createCustomerCardFundingSourceWithExchangeSchema,
  type CreateCustomerCardFundingSourceWithExchange,
} from "../create-customer-card-funding-source-with-exchange.js";
import {
  createCustomerExchangeFundingSourceSchema,
  type CreateCustomerExchangeFundingSource,
} from "../create-customer-exchange-funding-source.js";
import {
  createCustomerVirtualAccountFundingSourceSchema,
  type CreateCustomerVirtualAccountFundingSource,
} from "../create-customer-virtual-account-funding-source.js";

/**
 * Parameters for creating customer funding sources using different methods:
 * - Bank Account: Traditional method using routing/account numbers
 * - Exchange: Using IAV through exchange partners (Plaid, MX, etc.)
 * - Virtual Account: Creating Virtual Account Numbers (VANs)
 * - Card: Creating debit card funding sources using tokenized card data
 */
export type CreateCustomerFundingSource =
  | CreateCustomerBankFundingSourceWithAccountNumbers
  | CreateCustomerBankFundingSourceWithPlaid
  | CreateCustomerExchangeFundingSource
  | CreateCustomerVirtualAccountFundingSource
  | CreateCustomerCardFundingSourceWithExchange;

export const createCustomerFundingSourceSchema: Schema<CreateCustomerFundingSource> =
  s.of<CreateCustomerFundingSource>(
    s.union([
      s.lazy(() => createCustomerBankFundingSourceWithAccountNumbersSchema),
      s.lazy(() => createCustomerBankFundingSourceWithPlaidSchema),
      s.lazy(() => createCustomerExchangeFundingSourceSchema),
      s.lazy(() => createCustomerVirtualAccountFundingSourceSchema),
      s.lazy(() => createCustomerCardFundingSourceWithExchangeSchema),
    ]),
  );
