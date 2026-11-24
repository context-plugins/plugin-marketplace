import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newProductSchema, type NewProduct } from "./new-product.js";
import { oldProductSchema, type OldProduct } from "./old-product.js";
import {
  transactionTypeOpenApiDefinitionPortfolioApiSchema,
  type TransactionTypeOpenApiDefinitionPortfolioApi,
} from "./transaction-type-open-api-definition-portfolio-api.js";

export type ConvertPositionRequest = {
  /** Key of the instrument */
  instrumentToken: string;
  /** Indicates the new product to use for the convert positions */
  newProduct: NewProduct;
  /** Indicates the old product to use for the convert positions */
  oldProduct: OldProduct;
  /** Indicates whether its a buy(b) or sell(s) order */
  transactionType: TransactionTypeOpenApiDefinitionPortfolioApi;
  /** Quantity with which the position to convert */
  quantity: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const convertPositionRequestSchema: Schema<ConvertPositionRequest> = s.object<ConvertPositionRequest>(
  {
    instrumentToken: s.string(),
    newProduct: newProductSchema,
    oldProduct: oldProductSchema,
    transactionType: transactionTypeOpenApiDefinitionPortfolioApiSchema,
    quantity: s.int(),
    _keysMap: {
      instrumentToken: "instrument_token",
      newProduct: "new_product",
      oldProduct: "old_product",
      transactionType: "transaction_type",
    },
  },
  { additionalProperties: s.json() },
);
