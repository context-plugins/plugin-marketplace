import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether its a buy(b) or sell(s) order */
export const TransactionTypeOpenApiDefinitionPortfolioApi = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type TransactionTypeOpenApiDefinitionPortfolioApi =
  | (typeof TransactionTypeOpenApiDefinitionPortfolioApi)[keyof typeof TransactionTypeOpenApiDefinitionPortfolioApi]
  | (string & {});

export const transactionTypeOpenApiDefinitionPortfolioApiSchema: EnumSchema<TransactionTypeOpenApiDefinitionPortfolioApi> =
  s.enumOf<TransactionTypeOpenApiDefinitionPortfolioApi>(TransactionTypeOpenApiDefinitionPortfolioApi);
