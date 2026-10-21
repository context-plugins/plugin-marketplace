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
export type CreateCustomerFundingSource1 =
  | CreateCustomerBankFundingSourceWithAccountNumbers
  | CreateCustomerBankFundingSourceWithPlaid
  | CreateCustomerExchangeFundingSource
  | CreateCustomerVirtualAccountFundingSource
  | CreateCustomerCardFundingSourceWithExchange;

export const createCustomerFundingSource1Schema: Schema<CreateCustomerFundingSource1> =
  s.of<CreateCustomerFundingSource1>(
    s.union([
      s.lazy(() => createCustomerBankFundingSourceWithAccountNumbersSchema),
      s.lazy(() => createCustomerBankFundingSourceWithPlaidSchema),
      s.lazy(() => createCustomerExchangeFundingSourceSchema),
      s.lazy(() => createCustomerVirtualAccountFundingSourceSchema),
      s.lazy(() => createCustomerCardFundingSourceWithExchangeSchema),
    ]),
  );
